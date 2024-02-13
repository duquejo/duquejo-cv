import type { Ref } from 'vue';
import type { MessageSchema } from '@/i18n/config';
import type { Schema, Template } from '@pdfme/common';
import { calculateYears } from '@/shared/helpers/calculateYears';
import { BASE_PDF_EN, BASE_PDF_ES } from '@/shared/constants/image';

const schema: Record<string, Schema>[] = [
  {
    introduction: {
      type: 'text',
      position: {
        x: 20.05,
        y: 77.06
      },
      width: 169.9,
      height: 44.99,
      alignment: 'center',
      fontSize: 13,
      lineHeight: 1.5,
    },
    experience: {
      type: 'text',
      position: {
        x: 46.64,
        y: 150.14
      },
      width: 55,
      height: 8,
      fontSize: 15,
      lineHeight: 1,
    },
    languages: {
      type: 'text',
      position: {
        x: 138.54,
        y: 144.02
      },
      width: 70,
      height: 13.03,
      fontSize: 13,
    },
    databases: {
      type: 'text',
      position: {
        x: 20,
        y: 191
      },
      width: 80,
      height: 13,
      fontSize: 11,
    },
    tools: {
      type: 'text',
      position: {
        x: 110,
        y: 191
      },
      width: 80,
      height: 13,
      fontSize: 11,
    },
    backend: {
      type: 'text',
      position: {
        x: 20,
        y: 210
      },
      width: 80,
      height: 13,
      fontSize: 11,
    },
    cicd: {
      type: 'text',
      position: {
        x: 110,
        y: 210
      },
      width: 80,
      height: 13,
      fontSize: 11,
    },
    frontend: {
      type: 'text',
      position: {
        x: 20,
        y: 234
      },
      width: 80,
      height: 13,
      fontSize: 11,
    },
    programming_languages: {
      type: 'text',
      position: {
        x: 110,
        y: 234
      },
      width: 80,
      height: 8,
      fontSize: 11,
    },
    architecture: {
      type: 'text',
      position: {
        x: 20,
        y: 257
      },
      width: 80,
      height: 13,
      fontSize: 10.5,
    },
    methodologies: {
      type: 'text',
      position: {
        x: 110,
        y: 262
      },
      width: 80,
      height: 5,
      fontSize: 11,
    },
    security: {
      type: 'text',
      position: {
        x: 110,
        y: 248
      },
      width: 80,
      height: 5,
      fontSize: 11,
    },
    email_bottom: {
      type: 'text',
      position: {
        x: 147,
        y: 284.2
      },
      width: 41.63,
      height: 5,
      fontSize: 10
    },
    website_bottom: {
      type: 'text',
      position: {
        x: 147,
        y: 278.9
      },
      width: 50,
      height: 5,
      fontSize: 10,
    }
  }
];

const generateInputs = (languageSources: Ref<MessageSchema>): Record<string, string>[] => ([{
  introduction: languageSources.value.pdf.introduction,
  experience: `${calculateYears.value} ${languageSources.value.pdf.experience}`,
  languages: languageSources.value.languages.map((lang: { title: string, content: string }) => `${lang.title} - ${lang.content}`).join('\n'),
  databases: languageSources.value.pdf.databases,
  tools: languageSources.value.pdf.cloud,
  backend: languageSources.value.pdf.backend,
  cicd: languageSources.value.pdf.cicd,
  frontend: languageSources.value.pdf.frontend,
  architecture: languageSources.value.pdf.architecture,
  programming_languages: languageSources.value.pdf.programming_languages,
  methodologies: languageSources.value.pdf.methodologies,
  security: languageSources.value.pdf.security,
  email_bottom: 'duquejo01@gmail.com',
  website_bottom: document.location.origin,
}]);

const generateBaseTemplate = (locale: Ref<string>): Template => ({
  basePdf: locale.value === 'es' ? BASE_PDF_ES : BASE_PDF_EN,
  schemas: schema,
});

export { generateInputs, generateBaseTemplate };