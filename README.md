# Hotel Booking API

## 📌 Overview

A Node.js-based RESTful API for hotel booking with CRUD operations. Users can book hotels based on location, check-in and check-out dates, number of guests, and rooms, and retrieve a list of all bookings.

## 🛠 Technologies Used

Node.js

Express.js

TypeScript

Routing Controllers

PostgreSQL (Docker container)


## 🚀 Getting Started

✅ Prerequisites

Ensure you have the following installed:

Node.js

Docker

## 🏗 Setting Up the Database

Run the following command to start a PostgreSQL database in a Docker container:

```docker run --name postgressDB -p 5432:5432 -e POSTGRES_PASSWORD=root -d postgres```

## 📦 Installation

Clone the repository and install dependencies:

```git clone https://github.com/betaDev01/roomBooking_server.git```

```cd roomBooking_server```

```npm install```

## ▶️ Running the Application

```npm start```

## 🔗 API Endpoints

Booking Operations CURL

Get Hotels List
```sh
curl --location 'localhost:4000/booking/list'
```

Create/Update Booking
```sh
curl --location 'localhost:4000/booking/modify' \
--header 'Content-Type: application/json' \
--data '{
    
       "hotelId": "2ca1b3c4-85f3-42e1-9510-03190f1177b3",
       "checkInDate": "2025-03-10T14:00:00.000Z",
       "checkOutDate": "2025-03-15T11:00:00.000Z",
       "roomsBooked": 3,
       "guests": 1,
       "action": "canceled"
     }'
```
Delete Booking
```sh
curl --location --request DELETE 'localhost:4000/booking/delete?bookingId=23d5b4fd-5db3-452b-916c-2095a15d7682'
```
