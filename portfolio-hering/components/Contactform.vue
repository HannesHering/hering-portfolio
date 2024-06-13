<script setup>
import { ref } from 'vue';
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

// Setup form validation schema
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1, "Email is required").email("Invalid email"),
      subject: z.string().min(1, "Subject is required"),
      message: z.string().min(30, "Message must be at least 30 characters long"),
    })
  ),
});

// Define form fields
const [email, emailAttrs] = defineField("email");
const [subject, subjectAttrs] = defineField("subject");
const [message, messageAttrs] = defineField("message");

// Submit function to handle form submission
const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col">
      <label for="email">E-Mail</label>
      <input id="email" v-model="email" v-bind="emailAttrs" />
      <div>{{ errors.email }}</div>
    </div>
    <div class="flex flex-col">
      <label for="subject">Betreff</label>
      <input id="subject" v-model="subject" v-bind="subjectAttrs" />
      <div>{{ errors.subject }}</div>
    </div>
    <div class="flex flex-col">
      <label for="message">Nachricht</label>
      <input id="message" v-model="message" v-bind="messageAttrs" />
      <div>{{ errors.message }}</div>
    </div>
    <button
      type="submit"
      class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
    >
      Absenden
    </button>
  </form>
</template>
