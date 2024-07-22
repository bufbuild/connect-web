// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// source: buf/registry/module/v1/upload_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var buf_registry_module_v1_commit_pb = require('../../../../buf/registry/module/v1/commit_pb.js');
goog.object.extend(proto, buf_registry_module_v1_commit_pb);
var buf_registry_module_v1_file_pb = require('../../../../buf/registry/module/v1/file_pb.js');
goog.object.extend(proto, buf_registry_module_v1_file_pb);
var buf_registry_module_v1_label_pb = require('../../../../buf/registry/module/v1/label_pb.js');
goog.object.extend(proto, buf_registry_module_v1_label_pb);
var buf_registry_module_v1_module_pb = require('../../../../buf/registry/module/v1/module_pb.js');
goog.object.extend(proto, buf_registry_module_v1_module_pb);
var buf_validate_validate_pb = require('../../../../buf/validate/validate_pb.js');
goog.object.extend(proto, buf_validate_validate_pb);
goog.exportSymbol('proto.buf.registry.module.v1.UploadRequest', null, global);
goog.exportSymbol('proto.buf.registry.module.v1.UploadRequest.Content', null, global);
goog.exportSymbol('proto.buf.registry.module.v1.UploadResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.registry.module.v1.UploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.buf.registry.module.v1.UploadRequest.repeatedFields_, null);
};
goog.inherits(proto.buf.registry.module.v1.UploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.registry.module.v1.UploadRequest.displayName = 'proto.buf.registry.module.v1.UploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.registry.module.v1.UploadRequest.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.buf.registry.module.v1.UploadRequest.Content.repeatedFields_, null);
};
goog.inherits(proto.buf.registry.module.v1.UploadRequest.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.registry.module.v1.UploadRequest.Content.displayName = 'proto.buf.registry.module.v1.UploadRequest.Content';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.registry.module.v1.UploadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.buf.registry.module.v1.UploadResponse.repeatedFields_, null);
};
goog.inherits(proto.buf.registry.module.v1.UploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.registry.module.v1.UploadResponse.displayName = 'proto.buf.registry.module.v1.UploadResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.buf.registry.module.v1.UploadRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.registry.module.v1.UploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.registry.module.v1.UploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.registry.module.v1.UploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.registry.module.v1.UploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
contentsList: jspb.Message.toObjectList(msg.getContentsList(),
    proto.buf.registry.module.v1.UploadRequest.Content.toObject, includeInstance),
depCommitIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.registry.module.v1.UploadRequest}
 */
proto.buf.registry.module.v1.UploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.registry.module.v1.UploadRequest;
  return proto.buf.registry.module.v1.UploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.registry.module.v1.UploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.registry.module.v1.UploadRequest}
 */
proto.buf.registry.module.v1.UploadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.buf.registry.module.v1.UploadRequest.Content;
      reader.readMessage(value,proto.buf.registry.module.v1.UploadRequest.Content.deserializeBinaryFromReader);
      msg.addContents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDepCommitIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.registry.module.v1.UploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.registry.module.v1.UploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.registry.module.v1.UploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.registry.module.v1.UploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.buf.registry.module.v1.UploadRequest.Content.serializeBinaryToWriter
    );
  }
  f = message.getDepCommitIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.buf.registry.module.v1.UploadRequest.Content.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.registry.module.v1.UploadRequest.Content.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.registry.module.v1.UploadRequest.Content} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.registry.module.v1.UploadRequest.Content.toObject = function(includeInstance, msg) {
  var f, obj = {
moduleRef: (f = msg.getModuleRef()) && buf_registry_module_v1_module_pb.ModuleRef.toObject(includeInstance, f),
filesList: jspb.Message.toObjectList(msg.getFilesList(),
    buf_registry_module_v1_file_pb.File.toObject, includeInstance),
scopedLabelRefsList: jspb.Message.toObjectList(msg.getScopedLabelRefsList(),
    buf_registry_module_v1_label_pb.ScopedLabelRef.toObject, includeInstance),
sourceControlUrl: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content}
 */
proto.buf.registry.module.v1.UploadRequest.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.registry.module.v1.UploadRequest.Content;
  return proto.buf.registry.module.v1.UploadRequest.Content.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.registry.module.v1.UploadRequest.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content}
 */
proto.buf.registry.module.v1.UploadRequest.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new buf_registry_module_v1_module_pb.ModuleRef;
      reader.readMessage(value,buf_registry_module_v1_module_pb.ModuleRef.deserializeBinaryFromReader);
      msg.setModuleRef(value);
      break;
    case 2:
      var value = new buf_registry_module_v1_file_pb.File;
      reader.readMessage(value,buf_registry_module_v1_file_pb.File.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    case 3:
      var value = new buf_registry_module_v1_label_pb.ScopedLabelRef;
      reader.readMessage(value,buf_registry_module_v1_label_pb.ScopedLabelRef.deserializeBinaryFromReader);
      msg.addScopedLabelRefs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceControlUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.registry.module.v1.UploadRequest.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.registry.module.v1.UploadRequest.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.registry.module.v1.UploadRequest.Content.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleRef();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      buf_registry_module_v1_module_pb.ModuleRef.serializeBinaryToWriter
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      buf_registry_module_v1_file_pb.File.serializeBinaryToWriter
    );
  }
  f = message.getScopedLabelRefsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      buf_registry_module_v1_label_pb.ScopedLabelRef.serializeBinaryToWriter
    );
  }
  f = message.getSourceControlUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ModuleRef module_ref = 1;
 * @return {?proto.buf.registry.module.v1.ModuleRef}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.getModuleRef = function() {
  return /** @type{?proto.buf.registry.module.v1.ModuleRef} */ (
    jspb.Message.getWrapperField(this, buf_registry_module_v1_module_pb.ModuleRef, 1));
};


/**
 * @param {?proto.buf.registry.module.v1.ModuleRef|undefined} value
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content} returns this
*/
proto.buf.registry.module.v1.UploadRequest.Content.prototype.setModuleRef = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content} returns this
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.clearModuleRef = function() {
  return this.setModuleRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.hasModuleRef = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated File files = 2;
 * @return {!Array<!proto.buf.registry.module.v1.File>}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.buf.registry.module.v1.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, buf_registry_module_v1_file_pb.File, 2));
};


/**
 * @param {!Array<!proto.buf.registry.module.v1.File>} value
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content} returns this
*/
proto.buf.registry.module.v1.UploadRequest.Content.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.buf.registry.module.v1.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.buf.registry.module.v1.File}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.buf.registry.module.v1.File, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content} returns this
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * repeated ScopedLabelRef scoped_label_refs = 3;
 * @return {!Array<!proto.buf.registry.module.v1.ScopedLabelRef>}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.getScopedLabelRefsList = function() {
  return /** @type{!Array<!proto.buf.registry.module.v1.ScopedLabelRef>} */ (
    jspb.Message.getRepeatedWrapperField(this, buf_registry_module_v1_label_pb.ScopedLabelRef, 3));
};


/**
 * @param {!Array<!proto.buf.registry.module.v1.ScopedLabelRef>} value
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content} returns this
*/
proto.buf.registry.module.v1.UploadRequest.Content.prototype.setScopedLabelRefsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.buf.registry.module.v1.ScopedLabelRef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.buf.registry.module.v1.ScopedLabelRef}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.addScopedLabelRefs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.buf.registry.module.v1.ScopedLabelRef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content} returns this
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.clearScopedLabelRefsList = function() {
  return this.setScopedLabelRefsList([]);
};


/**
 * optional string source_control_url = 4;
 * @return {string}
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.getSourceControlUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content} returns this
 */
proto.buf.registry.module.v1.UploadRequest.Content.prototype.setSourceControlUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Content contents = 1;
 * @return {!Array<!proto.buf.registry.module.v1.UploadRequest.Content>}
 */
proto.buf.registry.module.v1.UploadRequest.prototype.getContentsList = function() {
  return /** @type{!Array<!proto.buf.registry.module.v1.UploadRequest.Content>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.buf.registry.module.v1.UploadRequest.Content, 1));
};


/**
 * @param {!Array<!proto.buf.registry.module.v1.UploadRequest.Content>} value
 * @return {!proto.buf.registry.module.v1.UploadRequest} returns this
*/
proto.buf.registry.module.v1.UploadRequest.prototype.setContentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.buf.registry.module.v1.UploadRequest.Content=} opt_value
 * @param {number=} opt_index
 * @return {!proto.buf.registry.module.v1.UploadRequest.Content}
 */
proto.buf.registry.module.v1.UploadRequest.prototype.addContents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.buf.registry.module.v1.UploadRequest.Content, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.buf.registry.module.v1.UploadRequest} returns this
 */
proto.buf.registry.module.v1.UploadRequest.prototype.clearContentsList = function() {
  return this.setContentsList([]);
};


/**
 * repeated string dep_commit_ids = 2;
 * @return {!Array<string>}
 */
proto.buf.registry.module.v1.UploadRequest.prototype.getDepCommitIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.buf.registry.module.v1.UploadRequest} returns this
 */
proto.buf.registry.module.v1.UploadRequest.prototype.setDepCommitIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.buf.registry.module.v1.UploadRequest} returns this
 */
proto.buf.registry.module.v1.UploadRequest.prototype.addDepCommitIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.buf.registry.module.v1.UploadRequest} returns this
 */
proto.buf.registry.module.v1.UploadRequest.prototype.clearDepCommitIdsList = function() {
  return this.setDepCommitIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.buf.registry.module.v1.UploadResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.registry.module.v1.UploadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.registry.module.v1.UploadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.registry.module.v1.UploadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.registry.module.v1.UploadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
commitsList: jspb.Message.toObjectList(msg.getCommitsList(),
    buf_registry_module_v1_commit_pb.Commit.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.registry.module.v1.UploadResponse}
 */
proto.buf.registry.module.v1.UploadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.registry.module.v1.UploadResponse;
  return proto.buf.registry.module.v1.UploadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.registry.module.v1.UploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.registry.module.v1.UploadResponse}
 */
proto.buf.registry.module.v1.UploadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new buf_registry_module_v1_commit_pb.Commit;
      reader.readMessage(value,buf_registry_module_v1_commit_pb.Commit.deserializeBinaryFromReader);
      msg.addCommits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.registry.module.v1.UploadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.registry.module.v1.UploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.registry.module.v1.UploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.registry.module.v1.UploadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      buf_registry_module_v1_commit_pb.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Commit commits = 1;
 * @return {!Array<!proto.buf.registry.module.v1.Commit>}
 */
proto.buf.registry.module.v1.UploadResponse.prototype.getCommitsList = function() {
  return /** @type{!Array<!proto.buf.registry.module.v1.Commit>} */ (
    jspb.Message.getRepeatedWrapperField(this, buf_registry_module_v1_commit_pb.Commit, 1));
};


/**
 * @param {!Array<!proto.buf.registry.module.v1.Commit>} value
 * @return {!proto.buf.registry.module.v1.UploadResponse} returns this
*/
proto.buf.registry.module.v1.UploadResponse.prototype.setCommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.buf.registry.module.v1.Commit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.buf.registry.module.v1.Commit}
 */
proto.buf.registry.module.v1.UploadResponse.prototype.addCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.buf.registry.module.v1.Commit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.buf.registry.module.v1.UploadResponse} returns this
 */
proto.buf.registry.module.v1.UploadResponse.prototype.clearCommitsList = function() {
  return this.setCommitsList([]);
};


goog.object.extend(exports, proto.buf.registry.module.v1);
