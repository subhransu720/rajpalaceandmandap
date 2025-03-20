import { Metadata } from 'next';
import FAQContent from './FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - Raj Palace & Convention',
  description: 'Frequently asked questions about Raj Palace & Convention venue, services, and booking process.',
};

export default function FAQPage() {
  return <FAQContent />;
} 