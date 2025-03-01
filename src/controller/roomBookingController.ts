import { Body, BodyParam, Delete, Get, JsonController, Post, QueryParam, Res } from "routing-controllers";
import type { Response } from 'express';
import { HotelDetails } from "../services/bookingServices.js";
import { BookingParams } from "../types/index.js";

@JsonController('/booking')
export class RoomBooking {
  @Get('/list')
  async getHotels(@QueryParam('location') location: string, @Res() res: Response) {
    try {
      const querryClient = HotelDetails.getInstance();

      const response = await querryClient.getHotelList({ location });
      if (response && response.length > 0) {
        return res.status(200).send({ data: response })

      } else {
        return res.status(404).send({ message: 'No Data Found' });
      }
    }
    catch (e) {
      console.log("🚀 ~ RoomBooking ~ getHotels ~ e:", e)
      return res.status(500).send({ message: `Something went wrong. ${e}` })
    }
  }


  @Post('/modify')
  async modifyBooking(@Body() bodyParams: BookingParams, @Res() res: Response) {
    try {
      const querryClient = HotelDetails.getInstance();
      const response = await querryClient.modifyBooking(bodyParams);
      if (response && response.length > 0) {
        return res.status(201).send({ message: 'Booking Confirmed', data: response[0] })
      } else {
        return res.status(404).send({ message: 'No Data Found' })
      }
    } catch (e) {
      console.log("🚀 ~ RoomBooking ~ createBooking ~ e:", e);
      return res.status(500).send({ message: `Something went wrong. ${e}` })
    }

  }

  @Delete('/delete')
  async deleteBooking(@QueryParam('bookingId') bookingId: string, @Res() res: Response) {
    try {
      const querryClient = HotelDetails.getInstance();
      if (bookingId) {
        const response = await querryClient.deleteBooking({ bookingId });

        if (response && response.length > 0) {
          return res.status(200).send({ message: 'Record Deleted successfully', data: response[0] })
        } else {
          return res.status(404).send({ message: 'No Data Found' })
        }
      } else {
        return res.status(400).send({ message: `Booking Id Missing.` })
      }

    } catch (e) {
      console.log("🚀 ~ RoomBooking ~ createBooking ~ e:", e);
      return res.status(500).send({ message: `Something went wrong. ${e}` })
    }

  }

  @Get('/booking-list')
  async getBookingDetails(@Res() res: Response) {
    try {
      const querryClient = HotelDetails.getInstance();

      const response = await querryClient.getBookingDetails();
      if (response && response.length > 0) {
        return res.status(200).send({ message: 'Record fetched successfully', data: response })
      } else {
        return res.status(404).send({ message: 'No Data Found' })
      }

    } catch (e) {
      console.log("🚀 ~ RoomBooking ~ createBooking ~ e:", e);
      return res.status(500).send({ message: `Something went wrong. ${e}` })
    }
  }

}

