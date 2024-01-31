"use server";
import React from "react";
import { error } from "console";
import { Resend } from "resend";
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from "@/email/Contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
  
export const sendEmail = async (formData : FormData) => {
    const email = formData.get('email');
    const message = formData.get('message');

    if (!validateString(email, 500)){
        return{
            error: "Invalid sender email"
        }
    }
    if (!validateString(message, 5000)){
        return{
            error: "Invalid message"
        }
    }
    let data;
    try{
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "ikomangkrisna40@gmail.com",
            subject: "Message from contact form",
            reply_to: email as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                email: email as string,
            })
        });
    }catch (error: unknown){
       return{
        error: getErrorMessage(error),
       };
    }
    return{
        data,
    };
  };