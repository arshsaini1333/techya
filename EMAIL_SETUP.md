# Email Configuration Guide

To enable email notifications when someone submits the contact form, you need to configure SMTP settings.

## Option 1: Using Gmail (Recommended for Development)

1. Create a `.env` file in the root directory if you don't have one
2. Add the following variables:

```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=info@techyaverse.com
```

### Getting Gmail App Password:
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Use that password in SMTP_PASSWORD

## Option 2: Using Other Email Providers

### Outlook/Hotmail:
```env
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USERNAME=your-email@outlook.com
SMTP_PASSWORD=your-password
RECIPIENT_EMAIL=info@techyaverse.com
```

### Custom SMTP Server:
```env
SMTP_SERVER=your-smtp-server.com
SMTP_PORT=587
SMTP_USERNAME=your-username
SMTP_PASSWORD=your-password
RECIPIENT_EMAIL=info@techyaverse.com
```

## Development Mode (No Email Configuration)

If you don't configure email settings, the contact form will still work but will print the submission details to the console instead of sending an email. This is useful for development and testing.

## Testing

After configuring, test the contact form:
1. Fill out the form on the contact page
2. Submit it
3. Check your email (info@techyaverse.com) for the notification

The email will contain:
- Name
- Email
- Company
- Service Type
- Description

