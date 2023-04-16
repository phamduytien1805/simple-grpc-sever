// Original file: proto/chat.proto

import type { Long } from '@grpc/proto-loader';

export interface JoinNotification {
  'username'?: (string);
  'timestamp'?: (number | string | Long);
}

export interface JoinNotification__Output {
  'username'?: (string);
  'timestamp'?: (Long);
}
