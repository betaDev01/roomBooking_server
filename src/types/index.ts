import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class BookingParams {

  @IsOptional()
  @IsString()
  readonly bookingId: string

  @IsString()
  readonly hotelId: string;

  @IsString()
  readonly checkInDate: string;

  @IsString()
  readonly checkOutDate: string;

  @IsNumber()
  readonly roomsBooked: string;

  @IsNumber()
  readonly guests: string;

  @IsString()
  readonly action: string;

}