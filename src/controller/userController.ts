import { Body, Get, JsonController, Post } from "routing-controllers";
import { generateResponseToken } from "../utils/helper.js";

@JsonController()
export class UserController {
  @Get('/health')
  async checkApplicationHealth() {
    return 'Server Up and running'
  }

  @Post("/singUp")
  async getAuthToken(@Body() bodyParams: { email: string, password: string }) {

    try {
      const token = generateResponseToken(bodyParams);
      return token;
    }
    catch (e) {
      return { message: 'Error Occured in generating JWT' }
    }
  }
}