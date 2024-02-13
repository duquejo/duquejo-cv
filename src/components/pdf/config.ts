import { Schema } from '@pdfme/common';

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
      width: 34.23,
      height: 5,
      fontSize: 10,
    }
  }
];

export { schema };