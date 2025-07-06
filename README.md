# flight-booker

Implement a Flight Booker component using React, which allows users to book either a one-way flight or a return flight.

Functional Requirements:

Flight Type Selection:
User can choose between:
One-Way Flight
Return Flight
Date Selection: The user must select :
Departure Date
Return Date (only if return flight is selected)
Validation Rules:

Departure date must not be in the past.
Return date (if applicable) must not be before the departure date.
Disable the "Book Flight" button if the form is invalid.

Submission: On clicking "Book Flight", show an alert with a confirmation message like:

“You have booked a one-way flight on 2025-06-05.”
“You have booked a return flight from 2025-06-05 to 2025-06-10.”
