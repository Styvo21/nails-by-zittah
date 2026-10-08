```javascript
const bookingForm =
    document.getElementById("bookingForm");


const WHATSAPP_NUMBER =
    "254798573731";


/*
    GET SERVICE OR SHAPE
    FROM THE URL
*/

const params =
    new URLSearchParams(
        window.location.search
    );


const selectedService =
    params.get("service");


const selectedShape =
    params.get("shape");


/*
    AUTOMATICALLY SELECT
    SERVICE
*/

if (selectedService) {

    const serviceSelect =
        document.getElementById("service");

    if (serviceSelect) {

        serviceSelect.value =
            selectedService;

    }

}


/*
    AUTOMATICALLY SELECT
    SHAPE
*/

if (selectedShape) {

    const shapeSelect =
        document.getElementById("shape");

    if (shapeSelect) {

        shapeSelect.value =
            selectedShape;

    }

}


/*
    BOOKING FORM
*/

if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                    .value.trim();


            const phone =
                document.getElementById("phone")
                    .value.trim();


            const service =
                document.getElementById("service")
                    .value;


            const shape =
                document.getElementById("shape")
                    .value;


            const date =
                document.getElementById("date")
                    .value;


            const time =
                document.getElementById("time")
                    .value;


            const message =
                document.getElementById("message")
                    .value.trim();


            const formattedDate =
                new Date(
                    date + "T00:00:00"
                ).toLocaleDateString(
                    "en-GB",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                );


            const whatsappMessage =
`💅 *NEW BOOKING — NAILS BY ZITTAH*

👤 *Name:* ${name}

📱 *Phone:* ${phone}

💅 *Service:* ${service}

✨ *Nail Shape:* ${shape}

📅 *Preferred Date:* ${formattedDate}

⏰ *Preferred Time:* ${time}

📝 *Additional Message:*
${message || "None"}

Hello Nails by Zittah, I would like to book this appointment. Please confirm my booking.`;


            const whatsappURL =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}
```
