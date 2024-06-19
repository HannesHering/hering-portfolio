<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
/* 
const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1, 'E-Mail-Adresse erforderlich').email('Ungültige E-Mail-Adresse'),
      message: z.string().min(30, 'Nachricht muss mindestens 30 Zeichen lang sein'),
    }),
  ),
}); */

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string().min(1, { message: 'E-Mail erforderlich' }).email({ message: 'Muss eine gültige E-Mail-Adresse sein' }),
    subject: zod.string(),
    message: zod.string().min(1, { message: 'Nachricht erforderlich' }).min(30, { message: 'Nachricht muss 30 Zeichen lang sein' }),
  })
);

async function onSubmit(values: any, { resetForm }: any) {
  await $fetch('/api/contact', {
    method: 'post',
    body: values,
  })
  resetForm();
}

</script>

<template>
  <Form :validation-schema="validationSchema" id="form" @submit="onSubmit">
    <div class="flex flex-col">
      <label for="email">E-Mail</label>
      <Field id="email" name="email" type="email"/>
      <ErrorMessage name="email"/>
    </div>
    <div class="flex flex-col">
      <label for="subject">Betreff</label>
      <Field id="subject" name="subject"/>
    </div>
    <div class="flex flex-col">
      <label for="message">Nachricht</label>
      <Field id="message" name="message" class="h-32"/>
      <ErrorMessage name="message"/>
    </div>
    <button
      class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
    >
      Absenden
    </button>
  </Form>
</template>

