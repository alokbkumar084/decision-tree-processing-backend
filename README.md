
# Decision Tree Processing Backend

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed and npm (Node Package Manager).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alokbkumar084/decision-tree-processing-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd decision-tree-processing-backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

To run the application locally, use the following command:

```bash
npm start
```
## Note -
Make sure your server running on the Port "localhost:3000"

## Testing with Postman

To check the conditions using Postman, 

Hit the POST request with below URL

URL - http://localhost:3000/execute-tree

send the following JSON data to the appropriate:

```json
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
```
