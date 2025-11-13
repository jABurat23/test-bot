# Facebook Messenger Chatbot 🤖

A secure, production-ready Facebook Messenger chatbot built with Node.js, Express, and PostgreSQL.

## Features ✨

- ✅ **Secure webhook verification** with signature validation
- ✅ **User persistence** - Stores user profiles and conversation history
- ✅ **Message history** - Track all conversations in PostgreSQL
- ✅ **Interactive buttons** and quick replies
- ✅ **Command system** - Extensible command handling
- ✅ **Rich messaging** - Templates, buttons, quick replies
- ✅ **Database integration** - Full PostgreSQL support

## Prerequisites 📋

- Node.js 18+ installed
- PostgreSQL database
- Facebook Page
- Facebook App (for Messenger integration)
- ngrok (for local development)

## Setup Instructions 🚀

### 1. Clone and Install

```bash
npm install
```

### 2. Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app → Choose "Business" type
3. Add "Messenger" product to your app
4. Generate a Page Access Token for your page

### 3. Set Up Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Fill in your credentials:
- `PAGE_ACCESS_TOKEN`: From Facebook App → Messenger → Settings
- `VERIFY_TOKEN`: Create your own random string (e.g., "my_secure_verify_token_123")
- `APP_SECRET`: From Facebook App → Settings → Basic
- `DATABASE_URL`: Your PostgreSQL connection string

### 4. Set Up PostgreSQL Database

Create a database:

```sql
CREATE DATABASE messenger_bot;
```

The app will automatically create the required tables on first run.

### 5. Run Locally with ngrok

Start your server:

```bash
npm run dev
```

In another terminal, start ngrok:

```bash
ngrok http 3000
```

Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`)

### 6. Configure Facebook Webhook

1. Go to Facebook App → Messenger → Settings
2. In "Webhooks" section, click "Add Callback URL"
3. Enter your ngrok URL + `/webhook` (e.g., `https://abc123.ngrok.io/webhook`)
4. Enter your `VERIFY_TOKEN` (same as in `.env`)
5. Subscribe to these webhook fields:
   - `messages`
   - `messaging_postbacks`
   - `message_deliveries`
   - `message_reads`

### 7. Test Your Bot

1. Go to your Facebook Page
2. Click "Send Message"
3. Type "hello" to start chatting!

## Available Commands 💬

- `hello` / `hi` - Greet the bot
- `menu` - Show interactive menu with buttons
- `help` - Display all available commands
- `about` - Learn about the bot
- `history` - View your recent message history

## Project Structure 📁

```
├── server.js           # Main application file
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── .env               # Your actual environment variables (git-ignored)
└── README.md          # This file
```

## Database Schema 🗄️

### Users Table
- `id` - Primary key
- `psid` - Page-scoped ID (unique)
- `first_name` - User's first name
- `last_name` - User's last name
- `profile_pic` - Profile picture URL
- `created_at` - Timestamp

### Messages Table
- `id` - Primary key
- `psid` - Foreign key to users
- `message_text` - Message content
- `sender` - 'user' or 'bot'
- `created_at` - Timestamp

## Security Features 🔒

1. **Webhook Signature Verification** - Validates all incoming requests
2. **Environment Variables** - Sensitive data stored securely
3. **Prepared Statements** - SQL injection protection
4. **HTTPS Required** - Secure communication with Facebook

## Deployment 🌐

### Deploy to Heroku

```bash
heroku create your-app-name
heroku addons:create heroku-postgresql:mini
git push heroku main
```

Set environment variables:

```bash
heroku config:set PAGE_ACCESS_TOKEN=your_token
heroku config:set VERIFY_TOKEN=your_verify_token
heroku config:set APP_SECRET=your_secret
```

Update Facebook webhook URL to your Heroku URL.

### Deploy to Railway/Render

1. Connect your GitHub repo
2. Add PostgreSQL database
3. Set environment variables
4. Deploy!

## Future Features 🎯

Ideas to expand your bot:

- [ ] **NLP Integration** - Add Dialogflow or wit.ai for natural language understanding
- [ ] **Admin Dashboard** - Web interface to view analytics
- [ ] **Broadcasting** - Send messages to all users
- [ ] **Payment Integration** - Add Stripe/PayPal
- [ ] **Appointment Booking** - Calendar integration
- [ ] **Multi-language** - i18n support
- [ ] **AI Responses** - Integrate OpenAI/Claude API
- [ ] **Image Recognition** - Process user-uploaded images
- [ ] **Persistent Menu** - Add a permanent menu to messenger
- [ ] **Customer Support Tickets** - Ticket system integration

## API Documentation 📚

### Webhook Endpoints

**GET /webhook** - Verification endpoint
- Query params: `hub.mode`, `hub.verify_token`, `hub.challenge`
- Returns: Challenge token on success

**POST /webhook** - Message receiving endpoint
- Receives messages and postbacks from Facebook
- Processes and responds automatically

**GET /** - Health check
- Returns: Server status

## Troubleshooting 🔧

**Webhook verification fails:**
- Ensure VERIFY_TOKEN matches in both .env and Facebook settings
- Check that ngrok URL is correct and HTTPS

**Messages not receiving:**
- Verify webhook is subscribed to 'messages' field
- Check PAGE_ACCESS_TOKEN is valid
- Look at server logs for errors

**Database errors:**
- Verify DATABASE_URL is correct
- Ensure PostgreSQL is running
- Check database user has correct permissions

## Resources 📖

- [Facebook Messenger Platform Docs](https://developers.facebook.com/docs/messenger-platform)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## License

MIT - Feel free to use this for your portfolio!

---

Built with ❤️ for portfolio demonstration