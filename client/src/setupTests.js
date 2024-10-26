// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { TextEncoder, TextDecoder  } from 'util';
import {TransformStream  } from 'stream/web';
import { ReadableStream } from "web-streams-polyfill";
// global.FormData = require('FormData')
// import { FormData } from 'FormData'

Object.assign(global, { TextDecoder, TextEncoder, ReadableStream, TransformStream });