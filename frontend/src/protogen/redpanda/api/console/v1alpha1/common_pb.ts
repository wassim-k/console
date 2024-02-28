// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/console/v1alpha1/common.proto (package redpanda.api.console.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum redpanda.api.console.v1alpha1.CompressionType
 */
export enum CompressionType {
  /**
   * @generated from enum value: COMPRESSION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: COMPRESSION_TYPE_UNCOMPRESSED = 1;
   */
  UNCOMPRESSED = 1,

  /**
   * @generated from enum value: COMPRESSION_TYPE_GZIP = 2;
   */
  GZIP = 2,

  /**
   * @generated from enum value: COMPRESSION_TYPE_SNAPPY = 3;
   */
  SNAPPY = 3,

  /**
   * @generated from enum value: COMPRESSION_TYPE_LZ4 = 4;
   */
  LZ4 = 4,

  /**
   * @generated from enum value: COMPRESSION_TYPE_ZSTD = 5;
   */
  ZSTD = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(CompressionType)
proto3.util.setEnumType(CompressionType, "redpanda.api.console.v1alpha1.CompressionType", [
  { no: 0, name: "COMPRESSION_TYPE_UNSPECIFIED" },
  { no: 1, name: "COMPRESSION_TYPE_UNCOMPRESSED" },
  { no: 2, name: "COMPRESSION_TYPE_GZIP" },
  { no: 3, name: "COMPRESSION_TYPE_SNAPPY" },
  { no: 4, name: "COMPRESSION_TYPE_LZ4" },
  { no: 5, name: "COMPRESSION_TYPE_ZSTD" },
]);

/**
 * @generated from enum redpanda.api.console.v1alpha1.PayloadEncoding
 */
export enum PayloadEncoding {
  /**
   * @generated from enum value: PAYLOAD_ENCODING_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_NULL = 1;
   */
  NULL = 1,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_AVRO = 2;
   */
  AVRO = 2,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_PROTOBUF = 3;
   */
  PROTOBUF = 3,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_PROTOBUF_SCHEMA = 4;
   */
  PROTOBUF_SCHEMA = 4,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_JSON = 5;
   */
  JSON = 5,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_JSON_SCHEMA = 6;
   */
  JSON_SCHEMA = 6,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_XML = 7;
   */
  XML = 7,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_TEXT = 8;
   */
  TEXT = 8,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_UTF8 = 9;
   */
  UTF8 = 9,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_MESSAGE_PACK = 10;
   */
  MESSAGE_PACK = 10,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_SMILE = 11;
   */
  SMILE = 11,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_BINARY = 12;
   */
  BINARY = 12,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_UINT = 13;
   */
  UINT = 13,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_CONSUMER_OFFSETS = 14;
   */
  CONSUMER_OFFSETS = 14,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_CBOR = 15;
   */
  CBOR = 15,

  /**
   * @generated from enum value: PAYLOAD_ENCODING_REST = 16;
   */
  REST = 16,
}
// Retrieve enum metadata with: proto3.getEnumType(PayloadEncoding)
proto3.util.setEnumType(PayloadEncoding, "redpanda.api.console.v1alpha1.PayloadEncoding", [
  { no: 0, name: "PAYLOAD_ENCODING_UNSPECIFIED" },
  { no: 1, name: "PAYLOAD_ENCODING_NULL" },
  { no: 2, name: "PAYLOAD_ENCODING_AVRO" },
  { no: 3, name: "PAYLOAD_ENCODING_PROTOBUF" },
  { no: 4, name: "PAYLOAD_ENCODING_PROTOBUF_SCHEMA" },
  { no: 5, name: "PAYLOAD_ENCODING_JSON" },
  { no: 6, name: "PAYLOAD_ENCODING_JSON_SCHEMA" },
  { no: 7, name: "PAYLOAD_ENCODING_XML" },
  { no: 8, name: "PAYLOAD_ENCODING_TEXT" },
  { no: 9, name: "PAYLOAD_ENCODING_UTF8" },
  { no: 10, name: "PAYLOAD_ENCODING_MESSAGE_PACK" },
  { no: 11, name: "PAYLOAD_ENCODING_SMILE" },
  { no: 12, name: "PAYLOAD_ENCODING_BINARY" },
  { no: 13, name: "PAYLOAD_ENCODING_UINT" },
  { no: 14, name: "PAYLOAD_ENCODING_CONSUMER_OFFSETS" },
  { no: 15, name: "PAYLOAD_ENCODING_CBOR" },
  { no: 16, name: "PAYLOAD_ENCODING_REST" },
]);

/**
 * KafkaRecordHeader is the record header.
 *
 * @generated from message redpanda.api.console.v1alpha1.KafkaRecordHeader
 */
export class KafkaRecordHeader extends Message<KafkaRecordHeader> {
  /**
   * Header key.
   *
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * Header value.
   *
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<KafkaRecordHeader>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.KafkaRecordHeader";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KafkaRecordHeader {
    return new KafkaRecordHeader().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KafkaRecordHeader {
    return new KafkaRecordHeader().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KafkaRecordHeader {
    return new KafkaRecordHeader().fromJsonString(jsonString, options);
  }

  static equals(a: KafkaRecordHeader | PlainMessage<KafkaRecordHeader> | undefined, b: KafkaRecordHeader | PlainMessage<KafkaRecordHeader> | undefined): boolean {
    return proto3.util.equals(KafkaRecordHeader, a, b);
  }
}

/**
 * @generated from message redpanda.api.console.v1alpha1.TroubleshootReport
 */
export class TroubleshootReport extends Message<TroubleshootReport> {
  /**
   * @generated from field: string serde_name = 1;
   */
  serdeName = "";

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  constructor(data?: PartialMessage<TroubleshootReport>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.TroubleshootReport";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "serde_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TroubleshootReport {
    return new TroubleshootReport().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TroubleshootReport {
    return new TroubleshootReport().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TroubleshootReport {
    return new TroubleshootReport().fromJsonString(jsonString, options);
  }

  static equals(a: TroubleshootReport | PlainMessage<TroubleshootReport> | undefined, b: TroubleshootReport | PlainMessage<TroubleshootReport> | undefined): boolean {
    return proto3.util.equals(TroubleshootReport, a, b);
  }
}

