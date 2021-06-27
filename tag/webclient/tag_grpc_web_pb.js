/**
 * @fileoverview gRPC-Web generated opcuaclient stub for tag
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


goog.provide('proto.tag.TagServiceClient');
goog.provide('proto.tag.TagServicePromiseClient');
goog.provide('proto.tag.StreamTagServiceClient');
goog.provide('proto.tag.StreamTagServicePromiseClient');
goog.provide('proto.tag.StreamTagEveryoneServiceClient');
goog.provide('proto.tag.StreamTagEveryoneServicePromiseClient');

goog.require('grpc.web.MethodDescriptor');
goog.require('grpc.web.MethodType');
goog.require('grpc.web.GrpcWebClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('grpc.web.Error');
goog.require('proto.tag.TagRequest');
goog.require('proto.tag.TagResponse');
goog.require('proto.tag.StreamTagRequest');
goog.require('proto.tag.StreamTagResponse');
goog.require('proto.tag.StreamTagEveryoneRequest');
goog.require('proto.tag.StreamTagEveryoneResponse');



goog.scope(function() {

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tag.TagServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The opcuaclient
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tag.TagServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The opcuaclient
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tag.TagRequest,
 *   !proto.tag.TagResponse>}
 */
const methodDescriptor_TagService_Tag = new grpc.web.MethodDescriptor(
  '/tag.TagService/Tag',
  grpc.web.MethodType.UNARY,
  proto.tag.TagRequest,
  proto.tag.TagResponse,
  /**
   * @param {!proto.tag.TagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tag.TagResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tag.TagRequest,
 *   !proto.tag.TagResponse>}
 */
const methodInfo_TagService_Tag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tag.TagResponse,
  /**
   * @param {!proto.tag.TagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tag.TagResponse.deserializeBinary
);


/**
 * @param {!proto.tag.TagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tag.TagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tag.TagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tag.TagServiceClient.prototype.tag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tag.TagService/Tag',
      request,
      metadata || {},
      methodDescriptor_TagService_Tag,
      callback);
};


/**
 * @param {!proto.tag.TagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tag.TagResponse>}
 *     Promise that resolves to the response
 */
proto.tag.TagServicePromiseClient.prototype.tag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tag.TagService/Tag',
      request,
      metadata || {},
      methodDescriptor_TagService_Tag);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tag.StreamTagServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The opcuaclient
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tag.StreamTagServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The opcuaclient
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tag.StreamTagRequest,
 *   !proto.tag.StreamTagResponse>}
 */
const methodDescriptor_StreamTagService_StreamTag = new grpc.web.MethodDescriptor(
  '/tag.StreamTagService/StreamTag',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.tag.StreamTagRequest,
  proto.tag.StreamTagResponse,
  /**
   * @param {!proto.tag.StreamTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tag.StreamTagResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tag.StreamTagRequest,
 *   !proto.tag.StreamTagResponse>}
 */
const methodInfo_StreamTagService_StreamTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tag.StreamTagResponse,
  /**
   * @param {!proto.tag.StreamTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tag.StreamTagResponse.deserializeBinary
);


/**
 * @param {!proto.tag.StreamTagRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.tag.StreamTagResponse>}
 *     The XHR Node Readable Stream
 */
proto.tag.StreamTagServiceClient.prototype.streamTag =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/tag.StreamTagService/StreamTag',
      request,
      metadata || {},
      methodDescriptor_StreamTagService_StreamTag);
};


/**
 * @param {!proto.tag.StreamTagRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.tag.StreamTagResponse>}
 *     The XHR Node Readable Stream
 */
proto.tag.StreamTagServicePromiseClient.prototype.streamTag =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/tag.StreamTagService/StreamTag',
      request,
      metadata || {},
      methodDescriptor_StreamTagService_StreamTag);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tag.StreamTagEveryoneServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The opcuaclient
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tag.StreamTagEveryoneServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The opcuaclient
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


}); // goog.scope

