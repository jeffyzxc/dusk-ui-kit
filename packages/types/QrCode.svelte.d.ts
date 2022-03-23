/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QrCodeProps {
  /**
   * Value used in generating the QR Code
   * @default ""
   */
  value?: string;

  /**
   * Sets the width in pixels for the rendered QR Code
   * @default 200
   */
  width?: number;

  /**
   * Sets the color of the QR Code
   * @default "#343434"
   */
  qrColor?: string;

  /**
   * Sets the background color of the QR Code
   * @default "#fff"
   */
  bgColor?: string;

  /**
   * Sets the alignment of the QR Code
   * @default "center"
   */
  align?: string;
}

export default class QrCode extends SvelteComponentTyped<QrCodeProps, {}, {}> {}
