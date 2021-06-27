// source: tag.proto
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

goog.provide('proto.tag.StreamTagEveryoneRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.tag.Tag');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * opcuaserver response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tag.StreamTagEveryoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tag.StreamTagEveryoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tag.StreamTagEveryoneRequest.displayName = 'proto.tag.StreamTagEveryoneRequest';
}



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
proto.tag.StreamTagEveryoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tag.StreamTagEveryoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tag.StreamTagEveryoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tag.StreamTagEveryoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: (f = msg.getTag()) && proto.tag.Tag.toObject(includeInstance, f)
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
 * @return {!proto.tag.StreamTagEveryoneRequest}
 */
proto.tag.StreamTagEveryoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tag.StreamTagEveryoneRequest;
  return proto.tag.StreamTagEveryoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tag.StreamTagEveryoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tag.StreamTagEveryoneRequest}
 */
proto.tag.StreamTagEveryoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tag.Tag;
      reader.readMessage(value,proto.tag.Tag.deserializeBinaryFromReader);
      msg.setTag(value);
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
proto.tag.StreamTagEveryoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tag.StreamTagEveryoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tag.StreamTagEveryoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tag.StreamTagEveryoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tag.Tag.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tag tag = 1;
 * @return {?proto.tag.Tag}
 */
proto.tag.StreamTagEveryoneRequest.prototype.getTag = function() {
  return /** @type{?proto.tag.Tag} */ (
    jspb.Message.getWrapperField(this, proto.tag.Tag, 1));
};


/**
 * @param {?proto.tag.Tag|undefined} value
 * @return {!proto.tag.StreamTagEveryoneRequest} returns this
*/
proto.tag.StreamTagEveryoneRequest.prototype.setTag = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tag.StreamTagEveryoneRequest} returns this
 */
proto.tag.StreamTagEveryoneRequest.prototype.clearTag = function() {
  return this.setTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tag.StreamTagEveryoneRequest.prototype.hasTag = function() {
  return jspb.Message.getField(this, 1) != null;
};

