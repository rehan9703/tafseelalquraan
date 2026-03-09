import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rehan515ahmad@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // User must provide this in .env
    },
});

/**
 * Sends a personalized streak reminder email
 * @param {string} to - User email
 * @param {string} name - User name
 */
export const sendStreakReminder = async (to, name) => {
    const mailOptions = {
        from: '"Tafseel-al-Qur\'an Dashboard" <rehan515ahmad@gmail.com>',
        to,
        subject: 'Don\'t let your Quran reading streak break! 🌙',
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #C9A84C;">Assalamu Alaikum, ${name}!</h2>
        <p>We noticed that you haven't checked in for your daily Quran reading today.</p>
        <p>Consistency is key to spiritual growth. Don't let your streak break—just a few verses a day can make a big difference.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}" 
             style="background-color: #C9A84C; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
             Continue Reading
          </a>
        </div>
        <p style="font-size: 0.9em; color: #666;">
          "The most beloved of deeds to Allah are those that are most consistent, even if they are small." (Sahih Bukhari)
        </p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 0.8em; color: #999; text-align: center;">
          Tafseel-al-Qur'an Dashboard Team<br>
          Contact: rehan515ahmad@gmail.com
        </p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Streak reminder sent to ${to}`);
        return true;
    } catch (error) {
        console.error('Error sending streak reminder:', error);
        return false;
    }
};

export default { sendStreakReminder };
