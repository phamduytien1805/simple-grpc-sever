// Original file: proto/chat.proto

import type { Long } from '@grpc/proto-loader';

export interface ChatMessage {
  'username'?: (string);
  'msg'?: (string);
  'timestamp'?: (number | string | Long);
  'like'?: (number);
}

export interface ChatMessage__Output {
  'username'?: (string);
  'msg'?: (string);
  'timestamp'?: (Long);
  'like'?: (number);
}
