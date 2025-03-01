import { ConnectDB } from "../db/index.js";
import { BookingParams } from "../types/index.js";
import { v4 as uuidv4 } from 'uuid';


export class HotelDetails {

  private static instance: null | HotelDetails = null;

  public static getInstance() {
    if (!HotelDetails.instance) {
      HotelDetails.instance = new HotelDetails();
    }
    return HotelDetails.instance;
  }

  private client = ConnectDB.getDBInstance();

  public async getHotelList(params: { location: string }) {
    try {
      const query = `SELECT * FROM "hotel_list" h 
      ${params.location ? `where h.location ilike '${params.location}'` : ''}
       order by hotel_name;`;

      const response = await this.client.query(query);
      return response.rows;
    } catch (e) {
      console.log("Error Occured during getHotelList", e)
    }
  }
  public async updateHotelAvailableRooms(params: { hotelId: string, action: string, roomCount: number }) {
    const totalCount = params.action === 'canceled' ? params.roomCount : - params.roomCount
    const query = `UPDATE hotel_list
                    SET available_rooms = available_rooms + (${totalCount})
                    WHERE id = '${params.hotelId}' ;`;
    await this.client.query(query);
  }

  public async modifyBooking(params: BookingParams) {
    try {
      const { action, checkInDate, checkOutDate, guests, hotelId, roomsBooked, bookingId } = params;

      const uuid = uuidv4();

      const query = `
      INSERT INTO booking_details (
        id,
        hotel_id, 
        no_guests, 
        no_rooms_booked, 
        "action", 
        check_in_at, 
        check_out_at 
      ) VALUES (
        '${bookingId || uuid}', 
        '${hotelId}', 
        ${guests}, 
        ${roomsBooked}, 
        '${action}', 
        '${new Date(checkInDate).toISOString()}',
        '${new Date(checkOutDate).toISOString()}'
      ) 
      ON CONFLICT (id) 
      DO UPDATE SET 
        hotel_id = COALESCE(EXCLUDED.hotel_id, booking_details.hotel_id),
        no_guests = EXCLUDED.no_guests,
        no_rooms_booked = EXCLUDED.no_rooms_booked,
        "action" = EXCLUDED."action",
        check_in_at = EXCLUDED.check_in_at,
        check_out_at = EXCLUDED.check_out_at,
        modified_at = NOW()
      RETURNING *;
      `;
      if (action !== 'deleted'){
        this.updateHotelAvailableRooms({ hotelId, roomCount: Number(roomsBooked), action })
      }
      const response = await this.client.query(query);
      return response.rows;
    } catch (e) {
      console.log("Error Occured during getHotelList", e);
    }
  }

  public async deleteBooking(params: { bookingId: string }) {
    try {
      const query = `delete from booking_details where id='${params.bookingId}' returning *;`;
      const response = await this.client.query(query);
      return response.rows;
    } catch (e) {
      console.log("Error Occured during getHotelList", e)
    }
  }

  public async getBookingDetails() {
    try {
      const query = `select * from booking_details where "action" != 'deleted'  order by modified_at, created_at ;`;
      const response = await this.client.query(query);
      return response.rows;
    } catch (e) {
      console.log("Error Occured during getHotelList", e)
    }
  }

}