// Mock data for address search based on postcode 'NN16 9XR'
export const addressMockData = {
    "NN16 9XR": {
      recordCount: 2,
      data: [
        {
          UPRN: "100031057713",
          USRN: "18704881",
          Address: "1 ELIOT CLOSE, KETTERING, NN16 9XR",
          HouseName: null,
          AdditionalHouseName: null,
          Street: "ELIOT CLOSE",
          Locality: "",
          Town: "KETTERING",
          Postcode: null,
          Longitude: 0,
          Latitude: 0,
          UserDefinedAddress: "",
          CalculatedAddress: null
        },
        {
          UPRN: "100031057722",
          USRN: "18704881",
          Address: "10 ELIOT CLOSE, KETTERING, NN16 9XR",
          HouseName: null,
          AdditionalHouseName: null,
          Street: "ELIOT CLOSE",
          Locality: "",
          Town: "KETTERING",
          Postcode: null,
          Longitude: 0,
          Latitude: 0,
          UserDefinedAddress: "",
          CalculatedAddress: null
        }
      ]
    }
  };
  
// Mock data for calendar events based on UPRN
export const calendarEventMockData = {
    "100031057713": [
      {
        id: 36193423,
        title: "Empty KBC Bin Refuse bin 240l",
        subject: "This Premises",
        start: "/Date(1661986799000)/",
        end: null,
        link: "",
        color: "rgb(0,0,0)",
        textColor: "rgb(255,255,255)",
        complete: true,
        url: "#"
      },
      {
        id: 4758088,
        title: "Empty Bin Recycling 240l",
        subject: "This Premises",
        start: "/Date(1564613999000)/",
        end: null,
        link: "",
        color: "rgb(192,192,192)",
        textColor: "rgb(0,0,0)",
        complete: true,
        url: "#"
      },
      {
        id: 4735057,
        title: "Empty Bin Recycling Paper Box",
        subject: "This Premises",
        start: "/Date(1564613999000)/",
        end: null,
        link: "",
        color: "rgb(192,192,192)",
        textColor: "rgb(0,0,0)",
        complete: true,
        url: "#"
      }
    ]
  };