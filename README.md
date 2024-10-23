## Prerequisites

Before you begin, ensure you have met the following requirements:

You have installed Node.js and npm (Node Package Manager).
You have a code editor, preferably Visual Studio Code.

## Installation

1. **Clone the repository:**

   git clone https://github.com/alokbkumar084/decision-tree-processing-backend.git
   
2. **Navigate to the project directory:**
   
   cd decision-tree-processing-backend
   
3. **Install the dependencies:**

   npm install
   
## Running the Application

To run the application locally, use the following command:  

npm start

4. **Add this json data on the postman to check the conditons :**
{
  "type": "Condition",
  "expression": "new Date().getFullYear() === 2024",
  "trueAction": {
    "type": "SendSMS",
    "phoneNumber": "1234567890"
  },
  "falseAction": {
    "type": "SendEmail",
    "sender": "sender@example.com",
    "receiver": "receiver@example.com"
  }
}
