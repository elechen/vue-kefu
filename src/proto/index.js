/*eslint-disable*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const friend = $root.friend = (() => {

    /**
     * Namespace friend.
     * @exports friend
     * @namespace
     */
    const friend = {};

    friend.GS2CNewMsgCnt = (function() {

        /**
         * Properties of a GS2CNewMsgCnt.
         * @memberof friend
         * @interface IGS2CNewMsgCnt
         * @property {number} iSender GS2CNewMsgCnt iSender
         * @property {number} iCnt GS2CNewMsgCnt iCnt
         */

        /**
         * Constructs a new GS2CNewMsgCnt.
         * @memberof friend
         * @classdesc Represents a GS2CNewMsgCnt.
         * @implements IGS2CNewMsgCnt
         * @constructor
         * @param {friend.IGS2CNewMsgCnt=} [properties] Properties to set
         */
        function GS2CNewMsgCnt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GS2CNewMsgCnt iSender.
         * @member {number} iSender
         * @memberof friend.GS2CNewMsgCnt
         * @instance
         */
        GS2CNewMsgCnt.prototype.iSender = 0;

        /**
         * GS2CNewMsgCnt iCnt.
         * @member {number} iCnt
         * @memberof friend.GS2CNewMsgCnt
         * @instance
         */
        GS2CNewMsgCnt.prototype.iCnt = 0;

        /**
         * Creates a new GS2CNewMsgCnt instance using the specified properties.
         * @function create
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {friend.IGS2CNewMsgCnt=} [properties] Properties to set
         * @returns {friend.GS2CNewMsgCnt} GS2CNewMsgCnt instance
         */
        GS2CNewMsgCnt.create = function create(properties) {
            return new GS2CNewMsgCnt(properties);
        };

        /**
         * Encodes the specified GS2CNewMsgCnt message. Does not implicitly {@link friend.GS2CNewMsgCnt.verify|verify} messages.
         * @function encode
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {friend.IGS2CNewMsgCnt} message GS2CNewMsgCnt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CNewMsgCnt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.iSender);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.iCnt);
            return writer;
        };

        /**
         * Encodes the specified GS2CNewMsgCnt message, length delimited. Does not implicitly {@link friend.GS2CNewMsgCnt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {friend.IGS2CNewMsgCnt} message GS2CNewMsgCnt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CNewMsgCnt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GS2CNewMsgCnt message from the specified reader or buffer.
         * @function decode
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.GS2CNewMsgCnt} GS2CNewMsgCnt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CNewMsgCnt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.GS2CNewMsgCnt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iSender = reader.sint32();
                    break;
                case 2:
                    message.iCnt = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("iSender"))
                throw $util.ProtocolError("missing required 'iSender'", { instance: message });
            if (!message.hasOwnProperty("iCnt"))
                throw $util.ProtocolError("missing required 'iCnt'", { instance: message });
            return message;
        };

        /**
         * Decodes a GS2CNewMsgCnt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.GS2CNewMsgCnt} GS2CNewMsgCnt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CNewMsgCnt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GS2CNewMsgCnt message.
         * @function verify
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GS2CNewMsgCnt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.iSender))
                return "iSender: integer expected";
            if (!$util.isInteger(message.iCnt))
                return "iCnt: integer expected";
            return null;
        };

        /**
         * Creates a GS2CNewMsgCnt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.GS2CNewMsgCnt} GS2CNewMsgCnt
         */
        GS2CNewMsgCnt.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.GS2CNewMsgCnt)
                return object;
            let message = new $root.friend.GS2CNewMsgCnt();
            if (object.iSender != null)
                message.iSender = object.iSender | 0;
            if (object.iCnt != null)
                message.iCnt = object.iCnt | 0;
            return message;
        };

        /**
         * Creates a plain object from a GS2CNewMsgCnt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.GS2CNewMsgCnt
         * @static
         * @param {friend.GS2CNewMsgCnt} message GS2CNewMsgCnt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GS2CNewMsgCnt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.iSender = 0;
                object.iCnt = 0;
            }
            if (message.iSender != null && message.hasOwnProperty("iSender"))
                object.iSender = message.iSender;
            if (message.iCnt != null && message.hasOwnProperty("iCnt"))
                object.iCnt = message.iCnt;
            return object;
        };

        /**
         * Converts this GS2CNewMsgCnt to JSON.
         * @function toJSON
         * @memberof friend.GS2CNewMsgCnt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GS2CNewMsgCnt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GS2CNewMsgCnt;
    })();

    friend.GS2CSendFrdMsg = (function() {

        /**
         * Properties of a GS2CSendFrdMsg.
         * @memberof friend
         * @interface IGS2CSendFrdMsg
         * @property {number} pid GS2CSendFrdMsg pid
         * @property {Array.<friend.GS2CSendFrdMsg.IFrdMsg>|null} [tFrdMsg] GS2CSendFrdMsg tFrdMsg
         */

        /**
         * Constructs a new GS2CSendFrdMsg.
         * @memberof friend
         * @classdesc Represents a GS2CSendFrdMsg.
         * @implements IGS2CSendFrdMsg
         * @constructor
         * @param {friend.IGS2CSendFrdMsg=} [properties] Properties to set
         */
        function GS2CSendFrdMsg(properties) {
            this.tFrdMsg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GS2CSendFrdMsg pid.
         * @member {number} pid
         * @memberof friend.GS2CSendFrdMsg
         * @instance
         */
        GS2CSendFrdMsg.prototype.pid = 0;

        /**
         * GS2CSendFrdMsg tFrdMsg.
         * @member {Array.<friend.GS2CSendFrdMsg.IFrdMsg>} tFrdMsg
         * @memberof friend.GS2CSendFrdMsg
         * @instance
         */
        GS2CSendFrdMsg.prototype.tFrdMsg = $util.emptyArray;

        /**
         * Creates a new GS2CSendFrdMsg instance using the specified properties.
         * @function create
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {friend.IGS2CSendFrdMsg=} [properties] Properties to set
         * @returns {friend.GS2CSendFrdMsg} GS2CSendFrdMsg instance
         */
        GS2CSendFrdMsg.create = function create(properties) {
            return new GS2CSendFrdMsg(properties);
        };

        /**
         * Encodes the specified GS2CSendFrdMsg message. Does not implicitly {@link friend.GS2CSendFrdMsg.verify|verify} messages.
         * @function encode
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {friend.IGS2CSendFrdMsg} message GS2CSendFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CSendFrdMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.pid);
            if (message.tFrdMsg != null && message.tFrdMsg.length)
                for (let i = 0; i < message.tFrdMsg.length; ++i)
                    $root.friend.GS2CSendFrdMsg.FrdMsg.encode(message.tFrdMsg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GS2CSendFrdMsg message, length delimited. Does not implicitly {@link friend.GS2CSendFrdMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {friend.IGS2CSendFrdMsg} message GS2CSendFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CSendFrdMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GS2CSendFrdMsg message from the specified reader or buffer.
         * @function decode
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.GS2CSendFrdMsg} GS2CSendFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CSendFrdMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.GS2CSendFrdMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.sint32();
                    break;
                case 2:
                    if (!(message.tFrdMsg && message.tFrdMsg.length))
                        message.tFrdMsg = [];
                    message.tFrdMsg.push($root.friend.GS2CSendFrdMsg.FrdMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("pid"))
                throw $util.ProtocolError("missing required 'pid'", { instance: message });
            return message;
        };

        /**
         * Decodes a GS2CSendFrdMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.GS2CSendFrdMsg} GS2CSendFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CSendFrdMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GS2CSendFrdMsg message.
         * @function verify
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GS2CSendFrdMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.pid))
                return "pid: integer expected";
            if (message.tFrdMsg != null && message.hasOwnProperty("tFrdMsg")) {
                if (!Array.isArray(message.tFrdMsg))
                    return "tFrdMsg: array expected";
                for (let i = 0; i < message.tFrdMsg.length; ++i) {
                    let error = $root.friend.GS2CSendFrdMsg.FrdMsg.verify(message.tFrdMsg[i]);
                    if (error)
                        return "tFrdMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GS2CSendFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.GS2CSendFrdMsg} GS2CSendFrdMsg
         */
        GS2CSendFrdMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.GS2CSendFrdMsg)
                return object;
            let message = new $root.friend.GS2CSendFrdMsg();
            if (object.pid != null)
                message.pid = object.pid | 0;
            if (object.tFrdMsg) {
                if (!Array.isArray(object.tFrdMsg))
                    throw TypeError(".friend.GS2CSendFrdMsg.tFrdMsg: array expected");
                message.tFrdMsg = [];
                for (let i = 0; i < object.tFrdMsg.length; ++i) {
                    if (typeof object.tFrdMsg[i] !== "object")
                        throw TypeError(".friend.GS2CSendFrdMsg.tFrdMsg: object expected");
                    message.tFrdMsg[i] = $root.friend.GS2CSendFrdMsg.FrdMsg.fromObject(object.tFrdMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GS2CSendFrdMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.GS2CSendFrdMsg
         * @static
         * @param {friend.GS2CSendFrdMsg} message GS2CSendFrdMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GS2CSendFrdMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tFrdMsg = [];
            if (options.defaults)
                object.pid = 0;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.tFrdMsg && message.tFrdMsg.length) {
                object.tFrdMsg = [];
                for (let j = 0; j < message.tFrdMsg.length; ++j)
                    object.tFrdMsg[j] = $root.friend.GS2CSendFrdMsg.FrdMsg.toObject(message.tFrdMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this GS2CSendFrdMsg to JSON.
         * @function toJSON
         * @memberof friend.GS2CSendFrdMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GS2CSendFrdMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GS2CSendFrdMsg.FrdMsg = (function() {

            /**
             * Properties of a FrdMsg.
             * @memberof friend.GS2CSendFrdMsg
             * @interface IFrdMsg
             * @property {number} id FrdMsg id
             * @property {number} iSender FrdMsg iSender
             * @property {string} sName FrdMsg sName
             * @property {string} sMsg FrdMsg sMsg
             * @property {number} iTime FrdMsg iTime
             */

            /**
             * Constructs a new FrdMsg.
             * @memberof friend.GS2CSendFrdMsg
             * @classdesc Represents a FrdMsg.
             * @implements IFrdMsg
             * @constructor
             * @param {friend.GS2CSendFrdMsg.IFrdMsg=} [properties] Properties to set
             */
            function FrdMsg(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FrdMsg id.
             * @member {number} id
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @instance
             */
            FrdMsg.prototype.id = 0;

            /**
             * FrdMsg iSender.
             * @member {number} iSender
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @instance
             */
            FrdMsg.prototype.iSender = 0;

            /**
             * FrdMsg sName.
             * @member {string} sName
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @instance
             */
            FrdMsg.prototype.sName = "";

            /**
             * FrdMsg sMsg.
             * @member {string} sMsg
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @instance
             */
            FrdMsg.prototype.sMsg = "";

            /**
             * FrdMsg iTime.
             * @member {number} iTime
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @instance
             */
            FrdMsg.prototype.iTime = 0;

            /**
             * Creates a new FrdMsg instance using the specified properties.
             * @function create
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {friend.GS2CSendFrdMsg.IFrdMsg=} [properties] Properties to set
             * @returns {friend.GS2CSendFrdMsg.FrdMsg} FrdMsg instance
             */
            FrdMsg.create = function create(properties) {
                return new FrdMsg(properties);
            };

            /**
             * Encodes the specified FrdMsg message. Does not implicitly {@link friend.GS2CSendFrdMsg.FrdMsg.verify|verify} messages.
             * @function encode
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {friend.GS2CSendFrdMsg.IFrdMsg} message FrdMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FrdMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.iSender);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sName);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sMsg);
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.iTime);
                return writer;
            };

            /**
             * Encodes the specified FrdMsg message, length delimited. Does not implicitly {@link friend.GS2CSendFrdMsg.FrdMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {friend.GS2CSendFrdMsg.IFrdMsg} message FrdMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FrdMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FrdMsg message from the specified reader or buffer.
             * @function decode
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {friend.GS2CSendFrdMsg.FrdMsg} FrdMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FrdMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.GS2CSendFrdMsg.FrdMsg();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.sint32();
                        break;
                    case 2:
                        message.iSender = reader.sint32();
                        break;
                    case 3:
                        message.sName = reader.string();
                        break;
                    case 4:
                        message.sMsg = reader.string();
                        break;
                    case 5:
                        message.iTime = reader.sint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("iSender"))
                    throw $util.ProtocolError("missing required 'iSender'", { instance: message });
                if (!message.hasOwnProperty("sName"))
                    throw $util.ProtocolError("missing required 'sName'", { instance: message });
                if (!message.hasOwnProperty("sMsg"))
                    throw $util.ProtocolError("missing required 'sMsg'", { instance: message });
                if (!message.hasOwnProperty("iTime"))
                    throw $util.ProtocolError("missing required 'iTime'", { instance: message });
                return message;
            };

            /**
             * Decodes a FrdMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {friend.GS2CSendFrdMsg.FrdMsg} FrdMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FrdMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FrdMsg message.
             * @function verify
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FrdMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.iSender))
                    return "iSender: integer expected";
                if (!$util.isString(message.sName))
                    return "sName: string expected";
                if (!$util.isString(message.sMsg))
                    return "sMsg: string expected";
                if (!$util.isInteger(message.iTime))
                    return "iTime: integer expected";
                return null;
            };

            /**
             * Creates a FrdMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {friend.GS2CSendFrdMsg.FrdMsg} FrdMsg
             */
            FrdMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.friend.GS2CSendFrdMsg.FrdMsg)
                    return object;
                let message = new $root.friend.GS2CSendFrdMsg.FrdMsg();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.iSender != null)
                    message.iSender = object.iSender | 0;
                if (object.sName != null)
                    message.sName = String(object.sName);
                if (object.sMsg != null)
                    message.sMsg = String(object.sMsg);
                if (object.iTime != null)
                    message.iTime = object.iTime | 0;
                return message;
            };

            /**
             * Creates a plain object from a FrdMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @static
             * @param {friend.GS2CSendFrdMsg.FrdMsg} message FrdMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FrdMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.iSender = 0;
                    object.sName = "";
                    object.sMsg = "";
                    object.iTime = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.iSender != null && message.hasOwnProperty("iSender"))
                    object.iSender = message.iSender;
                if (message.sName != null && message.hasOwnProperty("sName"))
                    object.sName = message.sName;
                if (message.sMsg != null && message.hasOwnProperty("sMsg"))
                    object.sMsg = message.sMsg;
                if (message.iTime != null && message.hasOwnProperty("iTime"))
                    object.iTime = message.iTime;
                return object;
            };

            /**
             * Converts this FrdMsg to JSON.
             * @function toJSON
             * @memberof friend.GS2CSendFrdMsg.FrdMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FrdMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FrdMsg;
        })();

        return GS2CSendFrdMsg;
    })();

    friend.GS2CSendFrdInfo = (function() {

        /**
         * Properties of a GS2CSendFrdInfo.
         * @memberof friend
         * @interface IGS2CSendFrdInfo
         * @property {number} pid GS2CSendFrdInfo pid
         * @property {number} iOnline GS2CSendFrdInfo iOnline
         * @property {string} sName GS2CSendFrdInfo sName
         * @property {number} iGrade GS2CSendFrdInfo iGrade
         * @property {number} iServer GS2CSendFrdInfo iServer
         * @property {string} sPlatform GS2CSendFrdInfo sPlatform
         * @property {number} iMoneyMax GS2CSendFrdInfo iMoneyMax
         * @property {number} iChatTime GS2CSendFrdInfo iChatTime
         */

        /**
         * Constructs a new GS2CSendFrdInfo.
         * @memberof friend
         * @classdesc Represents a GS2CSendFrdInfo.
         * @implements IGS2CSendFrdInfo
         * @constructor
         * @param {friend.IGS2CSendFrdInfo=} [properties] Properties to set
         */
        function GS2CSendFrdInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GS2CSendFrdInfo pid.
         * @member {number} pid
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.pid = 0;

        /**
         * GS2CSendFrdInfo iOnline.
         * @member {number} iOnline
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.iOnline = 0;

        /**
         * GS2CSendFrdInfo sName.
         * @member {string} sName
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.sName = "";

        /**
         * GS2CSendFrdInfo iGrade.
         * @member {number} iGrade
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.iGrade = 0;

        /**
         * GS2CSendFrdInfo iServer.
         * @member {number} iServer
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.iServer = 0;

        /**
         * GS2CSendFrdInfo sPlatform.
         * @member {string} sPlatform
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.sPlatform = "";

        /**
         * GS2CSendFrdInfo iMoneyMax.
         * @member {number} iMoneyMax
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.iMoneyMax = 0;

        /**
         * GS2CSendFrdInfo iChatTime.
         * @member {number} iChatTime
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         */
        GS2CSendFrdInfo.prototype.iChatTime = 0;

        /**
         * Creates a new GS2CSendFrdInfo instance using the specified properties.
         * @function create
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {friend.IGS2CSendFrdInfo=} [properties] Properties to set
         * @returns {friend.GS2CSendFrdInfo} GS2CSendFrdInfo instance
         */
        GS2CSendFrdInfo.create = function create(properties) {
            return new GS2CSendFrdInfo(properties);
        };

        /**
         * Encodes the specified GS2CSendFrdInfo message. Does not implicitly {@link friend.GS2CSendFrdInfo.verify|verify} messages.
         * @function encode
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {friend.IGS2CSendFrdInfo} message GS2CSendFrdInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CSendFrdInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.pid);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.iOnline);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sName);
            writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.iGrade);
            writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.iServer);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.sPlatform);
            writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.iMoneyMax);
            writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.iChatTime);
            return writer;
        };

        /**
         * Encodes the specified GS2CSendFrdInfo message, length delimited. Does not implicitly {@link friend.GS2CSendFrdInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {friend.IGS2CSendFrdInfo} message GS2CSendFrdInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CSendFrdInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GS2CSendFrdInfo message from the specified reader or buffer.
         * @function decode
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.GS2CSendFrdInfo} GS2CSendFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CSendFrdInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.GS2CSendFrdInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.sint32();
                    break;
                case 2:
                    message.iOnline = reader.sint32();
                    break;
                case 3:
                    message.sName = reader.string();
                    break;
                case 4:
                    message.iGrade = reader.sint32();
                    break;
                case 5:
                    message.iServer = reader.sint32();
                    break;
                case 6:
                    message.sPlatform = reader.string();
                    break;
                case 7:
                    message.iMoneyMax = reader.sint32();
                    break;
                case 8:
                    message.iChatTime = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("pid"))
                throw $util.ProtocolError("missing required 'pid'", { instance: message });
            if (!message.hasOwnProperty("iOnline"))
                throw $util.ProtocolError("missing required 'iOnline'", { instance: message });
            if (!message.hasOwnProperty("sName"))
                throw $util.ProtocolError("missing required 'sName'", { instance: message });
            if (!message.hasOwnProperty("iGrade"))
                throw $util.ProtocolError("missing required 'iGrade'", { instance: message });
            if (!message.hasOwnProperty("iServer"))
                throw $util.ProtocolError("missing required 'iServer'", { instance: message });
            if (!message.hasOwnProperty("sPlatform"))
                throw $util.ProtocolError("missing required 'sPlatform'", { instance: message });
            if (!message.hasOwnProperty("iMoneyMax"))
                throw $util.ProtocolError("missing required 'iMoneyMax'", { instance: message });
            if (!message.hasOwnProperty("iChatTime"))
                throw $util.ProtocolError("missing required 'iChatTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a GS2CSendFrdInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.GS2CSendFrdInfo} GS2CSendFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CSendFrdInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GS2CSendFrdInfo message.
         * @function verify
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GS2CSendFrdInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.pid))
                return "pid: integer expected";
            if (!$util.isInteger(message.iOnline))
                return "iOnline: integer expected";
            if (!$util.isString(message.sName))
                return "sName: string expected";
            if (!$util.isInteger(message.iGrade))
                return "iGrade: integer expected";
            if (!$util.isInteger(message.iServer))
                return "iServer: integer expected";
            if (!$util.isString(message.sPlatform))
                return "sPlatform: string expected";
            if (!$util.isInteger(message.iMoneyMax))
                return "iMoneyMax: integer expected";
            if (!$util.isInteger(message.iChatTime))
                return "iChatTime: integer expected";
            return null;
        };

        /**
         * Creates a GS2CSendFrdInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.GS2CSendFrdInfo} GS2CSendFrdInfo
         */
        GS2CSendFrdInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.GS2CSendFrdInfo)
                return object;
            let message = new $root.friend.GS2CSendFrdInfo();
            if (object.pid != null)
                message.pid = object.pid | 0;
            if (object.iOnline != null)
                message.iOnline = object.iOnline | 0;
            if (object.sName != null)
                message.sName = String(object.sName);
            if (object.iGrade != null)
                message.iGrade = object.iGrade | 0;
            if (object.iServer != null)
                message.iServer = object.iServer | 0;
            if (object.sPlatform != null)
                message.sPlatform = String(object.sPlatform);
            if (object.iMoneyMax != null)
                message.iMoneyMax = object.iMoneyMax | 0;
            if (object.iChatTime != null)
                message.iChatTime = object.iChatTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a GS2CSendFrdInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.GS2CSendFrdInfo
         * @static
         * @param {friend.GS2CSendFrdInfo} message GS2CSendFrdInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GS2CSendFrdInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pid = 0;
                object.iOnline = 0;
                object.sName = "";
                object.iGrade = 0;
                object.iServer = 0;
                object.sPlatform = "";
                object.iMoneyMax = 0;
                object.iChatTime = 0;
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.iOnline != null && message.hasOwnProperty("iOnline"))
                object.iOnline = message.iOnline;
            if (message.sName != null && message.hasOwnProperty("sName"))
                object.sName = message.sName;
            if (message.iGrade != null && message.hasOwnProperty("iGrade"))
                object.iGrade = message.iGrade;
            if (message.iServer != null && message.hasOwnProperty("iServer"))
                object.iServer = message.iServer;
            if (message.sPlatform != null && message.hasOwnProperty("sPlatform"))
                object.sPlatform = message.sPlatform;
            if (message.iMoneyMax != null && message.hasOwnProperty("iMoneyMax"))
                object.iMoneyMax = message.iMoneyMax;
            if (message.iChatTime != null && message.hasOwnProperty("iChatTime"))
                object.iChatTime = message.iChatTime;
            return object;
        };

        /**
         * Converts this GS2CSendFrdInfo to JSON.
         * @function toJSON
         * @memberof friend.GS2CSendFrdInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GS2CSendFrdInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GS2CSendFrdInfo;
    })();

    friend.GS2CSearchResult = (function() {

        /**
         * Properties of a GS2CSearchResult.
         * @memberof friend
         * @interface IGS2CSearchResult
         * @property {Array.<friend.GS2CSearchResult.ISearchResult>|null} [tRet] GS2CSearchResult tRet
         */

        /**
         * Constructs a new GS2CSearchResult.
         * @memberof friend
         * @classdesc Represents a GS2CSearchResult.
         * @implements IGS2CSearchResult
         * @constructor
         * @param {friend.IGS2CSearchResult=} [properties] Properties to set
         */
        function GS2CSearchResult(properties) {
            this.tRet = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GS2CSearchResult tRet.
         * @member {Array.<friend.GS2CSearchResult.ISearchResult>} tRet
         * @memberof friend.GS2CSearchResult
         * @instance
         */
        GS2CSearchResult.prototype.tRet = $util.emptyArray;

        /**
         * Creates a new GS2CSearchResult instance using the specified properties.
         * @function create
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {friend.IGS2CSearchResult=} [properties] Properties to set
         * @returns {friend.GS2CSearchResult} GS2CSearchResult instance
         */
        GS2CSearchResult.create = function create(properties) {
            return new GS2CSearchResult(properties);
        };

        /**
         * Encodes the specified GS2CSearchResult message. Does not implicitly {@link friend.GS2CSearchResult.verify|verify} messages.
         * @function encode
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {friend.IGS2CSearchResult} message GS2CSearchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CSearchResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tRet != null && message.tRet.length)
                for (let i = 0; i < message.tRet.length; ++i)
                    $root.friend.GS2CSearchResult.SearchResult.encode(message.tRet[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GS2CSearchResult message, length delimited. Does not implicitly {@link friend.GS2CSearchResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {friend.IGS2CSearchResult} message GS2CSearchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CSearchResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GS2CSearchResult message from the specified reader or buffer.
         * @function decode
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.GS2CSearchResult} GS2CSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CSearchResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.GS2CSearchResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tRet && message.tRet.length))
                        message.tRet = [];
                    message.tRet.push($root.friend.GS2CSearchResult.SearchResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GS2CSearchResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.GS2CSearchResult} GS2CSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CSearchResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GS2CSearchResult message.
         * @function verify
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GS2CSearchResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tRet != null && message.hasOwnProperty("tRet")) {
                if (!Array.isArray(message.tRet))
                    return "tRet: array expected";
                for (let i = 0; i < message.tRet.length; ++i) {
                    let error = $root.friend.GS2CSearchResult.SearchResult.verify(message.tRet[i]);
                    if (error)
                        return "tRet." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GS2CSearchResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.GS2CSearchResult} GS2CSearchResult
         */
        GS2CSearchResult.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.GS2CSearchResult)
                return object;
            let message = new $root.friend.GS2CSearchResult();
            if (object.tRet) {
                if (!Array.isArray(object.tRet))
                    throw TypeError(".friend.GS2CSearchResult.tRet: array expected");
                message.tRet = [];
                for (let i = 0; i < object.tRet.length; ++i) {
                    if (typeof object.tRet[i] !== "object")
                        throw TypeError(".friend.GS2CSearchResult.tRet: object expected");
                    message.tRet[i] = $root.friend.GS2CSearchResult.SearchResult.fromObject(object.tRet[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GS2CSearchResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.GS2CSearchResult
         * @static
         * @param {friend.GS2CSearchResult} message GS2CSearchResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GS2CSearchResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tRet = [];
            if (message.tRet && message.tRet.length) {
                object.tRet = [];
                for (let j = 0; j < message.tRet.length; ++j)
                    object.tRet[j] = $root.friend.GS2CSearchResult.SearchResult.toObject(message.tRet[j], options);
            }
            return object;
        };

        /**
         * Converts this GS2CSearchResult to JSON.
         * @function toJSON
         * @memberof friend.GS2CSearchResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GS2CSearchResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GS2CSearchResult.SearchResult = (function() {

            /**
             * Properties of a SearchResult.
             * @memberof friend.GS2CSearchResult
             * @interface ISearchResult
             * @property {number} id SearchResult id
             * @property {string} sName SearchResult sName
             */

            /**
             * Constructs a new SearchResult.
             * @memberof friend.GS2CSearchResult
             * @classdesc Represents a SearchResult.
             * @implements ISearchResult
             * @constructor
             * @param {friend.GS2CSearchResult.ISearchResult=} [properties] Properties to set
             */
            function SearchResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchResult id.
             * @member {number} id
             * @memberof friend.GS2CSearchResult.SearchResult
             * @instance
             */
            SearchResult.prototype.id = 0;

            /**
             * SearchResult sName.
             * @member {string} sName
             * @memberof friend.GS2CSearchResult.SearchResult
             * @instance
             */
            SearchResult.prototype.sName = "";

            /**
             * Creates a new SearchResult instance using the specified properties.
             * @function create
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {friend.GS2CSearchResult.ISearchResult=} [properties] Properties to set
             * @returns {friend.GS2CSearchResult.SearchResult} SearchResult instance
             */
            SearchResult.create = function create(properties) {
                return new SearchResult(properties);
            };

            /**
             * Encodes the specified SearchResult message. Does not implicitly {@link friend.GS2CSearchResult.SearchResult.verify|verify} messages.
             * @function encode
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {friend.GS2CSearchResult.ISearchResult} message SearchResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.id);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sName);
                return writer;
            };

            /**
             * Encodes the specified SearchResult message, length delimited. Does not implicitly {@link friend.GS2CSearchResult.SearchResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {friend.GS2CSearchResult.ISearchResult} message SearchResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchResult message from the specified reader or buffer.
             * @function decode
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {friend.GS2CSearchResult.SearchResult} SearchResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.GS2CSearchResult.SearchResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.sint32();
                        break;
                    case 2:
                        message.sName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("sName"))
                    throw $util.ProtocolError("missing required 'sName'", { instance: message });
                return message;
            };

            /**
             * Decodes a SearchResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {friend.GS2CSearchResult.SearchResult} SearchResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchResult message.
             * @function verify
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isString(message.sName))
                    return "sName: string expected";
                return null;
            };

            /**
             * Creates a SearchResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {friend.GS2CSearchResult.SearchResult} SearchResult
             */
            SearchResult.fromObject = function fromObject(object) {
                if (object instanceof $root.friend.GS2CSearchResult.SearchResult)
                    return object;
                let message = new $root.friend.GS2CSearchResult.SearchResult();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.sName != null)
                    message.sName = String(object.sName);
                return message;
            };

            /**
             * Creates a plain object from a SearchResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof friend.GS2CSearchResult.SearchResult
             * @static
             * @param {friend.GS2CSearchResult.SearchResult} message SearchResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.sName = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.sName != null && message.hasOwnProperty("sName"))
                    object.sName = message.sName;
                return object;
            };

            /**
             * Converts this SearchResult to JSON.
             * @function toJSON
             * @memberof friend.GS2CSearchResult.SearchResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SearchResult;
        })();

        return GS2CSearchResult;
    })();

    friend.C2GSNewFrdMsg = (function() {

        /**
         * Properties of a C2GSNewFrdMsg.
         * @memberof friend
         * @interface IC2GSNewFrdMsg
         * @property {number} iTarget C2GSNewFrdMsg iTarget
         * @property {string} sMsg C2GSNewFrdMsg sMsg
         */

        /**
         * Constructs a new C2GSNewFrdMsg.
         * @memberof friend
         * @classdesc Represents a C2GSNewFrdMsg.
         * @implements IC2GSNewFrdMsg
         * @constructor
         * @param {friend.IC2GSNewFrdMsg=} [properties] Properties to set
         */
        function C2GSNewFrdMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSNewFrdMsg iTarget.
         * @member {number} iTarget
         * @memberof friend.C2GSNewFrdMsg
         * @instance
         */
        C2GSNewFrdMsg.prototype.iTarget = 0;

        /**
         * C2GSNewFrdMsg sMsg.
         * @member {string} sMsg
         * @memberof friend.C2GSNewFrdMsg
         * @instance
         */
        C2GSNewFrdMsg.prototype.sMsg = "";

        /**
         * Creates a new C2GSNewFrdMsg instance using the specified properties.
         * @function create
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {friend.IC2GSNewFrdMsg=} [properties] Properties to set
         * @returns {friend.C2GSNewFrdMsg} C2GSNewFrdMsg instance
         */
        C2GSNewFrdMsg.create = function create(properties) {
            return new C2GSNewFrdMsg(properties);
        };

        /**
         * Encodes the specified C2GSNewFrdMsg message. Does not implicitly {@link friend.C2GSNewFrdMsg.verify|verify} messages.
         * @function encode
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {friend.IC2GSNewFrdMsg} message C2GSNewFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSNewFrdMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.iTarget);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sMsg);
            return writer;
        };

        /**
         * Encodes the specified C2GSNewFrdMsg message, length delimited. Does not implicitly {@link friend.C2GSNewFrdMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {friend.IC2GSNewFrdMsg} message C2GSNewFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSNewFrdMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSNewFrdMsg message from the specified reader or buffer.
         * @function decode
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.C2GSNewFrdMsg} C2GSNewFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSNewFrdMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.C2GSNewFrdMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iTarget = reader.sint32();
                    break;
                case 2:
                    message.sMsg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("iTarget"))
                throw $util.ProtocolError("missing required 'iTarget'", { instance: message });
            if (!message.hasOwnProperty("sMsg"))
                throw $util.ProtocolError("missing required 'sMsg'", { instance: message });
            return message;
        };

        /**
         * Decodes a C2GSNewFrdMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.C2GSNewFrdMsg} C2GSNewFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSNewFrdMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSNewFrdMsg message.
         * @function verify
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSNewFrdMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.iTarget))
                return "iTarget: integer expected";
            if (!$util.isString(message.sMsg))
                return "sMsg: string expected";
            return null;
        };

        /**
         * Creates a C2GSNewFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.C2GSNewFrdMsg} C2GSNewFrdMsg
         */
        C2GSNewFrdMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.C2GSNewFrdMsg)
                return object;
            let message = new $root.friend.C2GSNewFrdMsg();
            if (object.iTarget != null)
                message.iTarget = object.iTarget | 0;
            if (object.sMsg != null)
                message.sMsg = String(object.sMsg);
            return message;
        };

        /**
         * Creates a plain object from a C2GSNewFrdMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.C2GSNewFrdMsg
         * @static
         * @param {friend.C2GSNewFrdMsg} message C2GSNewFrdMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSNewFrdMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.iTarget = 0;
                object.sMsg = "";
            }
            if (message.iTarget != null && message.hasOwnProperty("iTarget"))
                object.iTarget = message.iTarget;
            if (message.sMsg != null && message.hasOwnProperty("sMsg"))
                object.sMsg = message.sMsg;
            return object;
        };

        /**
         * Converts this C2GSNewFrdMsg to JSON.
         * @function toJSON
         * @memberof friend.C2GSNewFrdMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSNewFrdMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSNewFrdMsg;
    })();

    friend.C2GSReadFrdMsg = (function() {

        /**
         * Properties of a C2GSReadFrdMsg.
         * @memberof friend
         * @interface IC2GSReadFrdMsg
         * @property {number} iSender C2GSReadFrdMsg iSender
         */

        /**
         * Constructs a new C2GSReadFrdMsg.
         * @memberof friend
         * @classdesc Represents a C2GSReadFrdMsg.
         * @implements IC2GSReadFrdMsg
         * @constructor
         * @param {friend.IC2GSReadFrdMsg=} [properties] Properties to set
         */
        function C2GSReadFrdMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSReadFrdMsg iSender.
         * @member {number} iSender
         * @memberof friend.C2GSReadFrdMsg
         * @instance
         */
        C2GSReadFrdMsg.prototype.iSender = 0;

        /**
         * Creates a new C2GSReadFrdMsg instance using the specified properties.
         * @function create
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {friend.IC2GSReadFrdMsg=} [properties] Properties to set
         * @returns {friend.C2GSReadFrdMsg} C2GSReadFrdMsg instance
         */
        C2GSReadFrdMsg.create = function create(properties) {
            return new C2GSReadFrdMsg(properties);
        };

        /**
         * Encodes the specified C2GSReadFrdMsg message. Does not implicitly {@link friend.C2GSReadFrdMsg.verify|verify} messages.
         * @function encode
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {friend.IC2GSReadFrdMsg} message C2GSReadFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSReadFrdMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.iSender);
            return writer;
        };

        /**
         * Encodes the specified C2GSReadFrdMsg message, length delimited. Does not implicitly {@link friend.C2GSReadFrdMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {friend.IC2GSReadFrdMsg} message C2GSReadFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSReadFrdMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSReadFrdMsg message from the specified reader or buffer.
         * @function decode
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.C2GSReadFrdMsg} C2GSReadFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSReadFrdMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.C2GSReadFrdMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iSender = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("iSender"))
                throw $util.ProtocolError("missing required 'iSender'", { instance: message });
            return message;
        };

        /**
         * Decodes a C2GSReadFrdMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.C2GSReadFrdMsg} C2GSReadFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSReadFrdMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSReadFrdMsg message.
         * @function verify
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSReadFrdMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.iSender))
                return "iSender: integer expected";
            return null;
        };

        /**
         * Creates a C2GSReadFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.C2GSReadFrdMsg} C2GSReadFrdMsg
         */
        C2GSReadFrdMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.C2GSReadFrdMsg)
                return object;
            let message = new $root.friend.C2GSReadFrdMsg();
            if (object.iSender != null)
                message.iSender = object.iSender | 0;
            return message;
        };

        /**
         * Creates a plain object from a C2GSReadFrdMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.C2GSReadFrdMsg
         * @static
         * @param {friend.C2GSReadFrdMsg} message C2GSReadFrdMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSReadFrdMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.iSender = 0;
            if (message.iSender != null && message.hasOwnProperty("iSender"))
                object.iSender = message.iSender;
            return object;
        };

        /**
         * Converts this C2GSReadFrdMsg to JSON.
         * @function toJSON
         * @memberof friend.C2GSReadFrdMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSReadFrdMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSReadFrdMsg;
    })();

    friend.C2GSReplyFrdMsg = (function() {

        /**
         * Properties of a C2GSReplyFrdMsg.
         * @memberof friend
         * @interface IC2GSReplyFrdMsg
         * @property {number} iSender C2GSReplyFrdMsg iSender
         * @property {number} id C2GSReplyFrdMsg id
         */

        /**
         * Constructs a new C2GSReplyFrdMsg.
         * @memberof friend
         * @classdesc Represents a C2GSReplyFrdMsg.
         * @implements IC2GSReplyFrdMsg
         * @constructor
         * @param {friend.IC2GSReplyFrdMsg=} [properties] Properties to set
         */
        function C2GSReplyFrdMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSReplyFrdMsg iSender.
         * @member {number} iSender
         * @memberof friend.C2GSReplyFrdMsg
         * @instance
         */
        C2GSReplyFrdMsg.prototype.iSender = 0;

        /**
         * C2GSReplyFrdMsg id.
         * @member {number} id
         * @memberof friend.C2GSReplyFrdMsg
         * @instance
         */
        C2GSReplyFrdMsg.prototype.id = 0;

        /**
         * Creates a new C2GSReplyFrdMsg instance using the specified properties.
         * @function create
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {friend.IC2GSReplyFrdMsg=} [properties] Properties to set
         * @returns {friend.C2GSReplyFrdMsg} C2GSReplyFrdMsg instance
         */
        C2GSReplyFrdMsg.create = function create(properties) {
            return new C2GSReplyFrdMsg(properties);
        };

        /**
         * Encodes the specified C2GSReplyFrdMsg message. Does not implicitly {@link friend.C2GSReplyFrdMsg.verify|verify} messages.
         * @function encode
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {friend.IC2GSReplyFrdMsg} message C2GSReplyFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSReplyFrdMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.iSender);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified C2GSReplyFrdMsg message, length delimited. Does not implicitly {@link friend.C2GSReplyFrdMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {friend.IC2GSReplyFrdMsg} message C2GSReplyFrdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSReplyFrdMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSReplyFrdMsg message from the specified reader or buffer.
         * @function decode
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.C2GSReplyFrdMsg} C2GSReplyFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSReplyFrdMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.C2GSReplyFrdMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iSender = reader.sint32();
                    break;
                case 2:
                    message.id = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("iSender"))
                throw $util.ProtocolError("missing required 'iSender'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a C2GSReplyFrdMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.C2GSReplyFrdMsg} C2GSReplyFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSReplyFrdMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSReplyFrdMsg message.
         * @function verify
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSReplyFrdMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.iSender))
                return "iSender: integer expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            return null;
        };

        /**
         * Creates a C2GSReplyFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.C2GSReplyFrdMsg} C2GSReplyFrdMsg
         */
        C2GSReplyFrdMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.C2GSReplyFrdMsg)
                return object;
            let message = new $root.friend.C2GSReplyFrdMsg();
            if (object.iSender != null)
                message.iSender = object.iSender | 0;
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a C2GSReplyFrdMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.C2GSReplyFrdMsg
         * @static
         * @param {friend.C2GSReplyFrdMsg} message C2GSReplyFrdMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSReplyFrdMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.iSender = 0;
                object.id = 0;
            }
            if (message.iSender != null && message.hasOwnProperty("iSender"))
                object.iSender = message.iSender;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this C2GSReplyFrdMsg to JSON.
         * @function toJSON
         * @memberof friend.C2GSReplyFrdMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSReplyFrdMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSReplyFrdMsg;
    })();

    friend.C2GSGetFrdInfo = (function() {

        /**
         * Properties of a C2GSGetFrdInfo.
         * @memberof friend
         * @interface IC2GSGetFrdInfo
         * @property {number} pid C2GSGetFrdInfo pid
         */

        /**
         * Constructs a new C2GSGetFrdInfo.
         * @memberof friend
         * @classdesc Represents a C2GSGetFrdInfo.
         * @implements IC2GSGetFrdInfo
         * @constructor
         * @param {friend.IC2GSGetFrdInfo=} [properties] Properties to set
         */
        function C2GSGetFrdInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSGetFrdInfo pid.
         * @member {number} pid
         * @memberof friend.C2GSGetFrdInfo
         * @instance
         */
        C2GSGetFrdInfo.prototype.pid = 0;

        /**
         * Creates a new C2GSGetFrdInfo instance using the specified properties.
         * @function create
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {friend.IC2GSGetFrdInfo=} [properties] Properties to set
         * @returns {friend.C2GSGetFrdInfo} C2GSGetFrdInfo instance
         */
        C2GSGetFrdInfo.create = function create(properties) {
            return new C2GSGetFrdInfo(properties);
        };

        /**
         * Encodes the specified C2GSGetFrdInfo message. Does not implicitly {@link friend.C2GSGetFrdInfo.verify|verify} messages.
         * @function encode
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {friend.IC2GSGetFrdInfo} message C2GSGetFrdInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSGetFrdInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.pid);
            return writer;
        };

        /**
         * Encodes the specified C2GSGetFrdInfo message, length delimited. Does not implicitly {@link friend.C2GSGetFrdInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {friend.IC2GSGetFrdInfo} message C2GSGetFrdInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSGetFrdInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSGetFrdInfo message from the specified reader or buffer.
         * @function decode
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.C2GSGetFrdInfo} C2GSGetFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSGetFrdInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.C2GSGetFrdInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("pid"))
                throw $util.ProtocolError("missing required 'pid'", { instance: message });
            return message;
        };

        /**
         * Decodes a C2GSGetFrdInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.C2GSGetFrdInfo} C2GSGetFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSGetFrdInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSGetFrdInfo message.
         * @function verify
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSGetFrdInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.pid))
                return "pid: integer expected";
            return null;
        };

        /**
         * Creates a C2GSGetFrdInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.C2GSGetFrdInfo} C2GSGetFrdInfo
         */
        C2GSGetFrdInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.C2GSGetFrdInfo)
                return object;
            let message = new $root.friend.C2GSGetFrdInfo();
            if (object.pid != null)
                message.pid = object.pid | 0;
            return message;
        };

        /**
         * Creates a plain object from a C2GSGetFrdInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.C2GSGetFrdInfo
         * @static
         * @param {friend.C2GSGetFrdInfo} message C2GSGetFrdInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSGetFrdInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.pid = 0;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            return object;
        };

        /**
         * Converts this C2GSGetFrdInfo to JSON.
         * @function toJSON
         * @memberof friend.C2GSGetFrdInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSGetFrdInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSGetFrdInfo;
    })();

    friend.C2GSSearchFriend = (function() {

        /**
         * Properties of a C2GSSearchFriend.
         * @memberof friend
         * @interface IC2GSSearchFriend
         * @property {string} sKey C2GSSearchFriend sKey
         */

        /**
         * Constructs a new C2GSSearchFriend.
         * @memberof friend
         * @classdesc Represents a C2GSSearchFriend.
         * @implements IC2GSSearchFriend
         * @constructor
         * @param {friend.IC2GSSearchFriend=} [properties] Properties to set
         */
        function C2GSSearchFriend(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSSearchFriend sKey.
         * @member {string} sKey
         * @memberof friend.C2GSSearchFriend
         * @instance
         */
        C2GSSearchFriend.prototype.sKey = "";

        /**
         * Creates a new C2GSSearchFriend instance using the specified properties.
         * @function create
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {friend.IC2GSSearchFriend=} [properties] Properties to set
         * @returns {friend.C2GSSearchFriend} C2GSSearchFriend instance
         */
        C2GSSearchFriend.create = function create(properties) {
            return new C2GSSearchFriend(properties);
        };

        /**
         * Encodes the specified C2GSSearchFriend message. Does not implicitly {@link friend.C2GSSearchFriend.verify|verify} messages.
         * @function encode
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {friend.IC2GSSearchFriend} message C2GSSearchFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSSearchFriend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sKey);
            return writer;
        };

        /**
         * Encodes the specified C2GSSearchFriend message, length delimited. Does not implicitly {@link friend.C2GSSearchFriend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {friend.IC2GSSearchFriend} message C2GSSearchFriend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSSearchFriend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSSearchFriend message from the specified reader or buffer.
         * @function decode
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.C2GSSearchFriend} C2GSSearchFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSSearchFriend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.C2GSSearchFriend();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sKey"))
                throw $util.ProtocolError("missing required 'sKey'", { instance: message });
            return message;
        };

        /**
         * Decodes a C2GSSearchFriend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.C2GSSearchFriend} C2GSSearchFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSSearchFriend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSSearchFriend message.
         * @function verify
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSSearchFriend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sKey))
                return "sKey: string expected";
            return null;
        };

        /**
         * Creates a C2GSSearchFriend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.C2GSSearchFriend} C2GSSearchFriend
         */
        C2GSSearchFriend.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.C2GSSearchFriend)
                return object;
            let message = new $root.friend.C2GSSearchFriend();
            if (object.sKey != null)
                message.sKey = String(object.sKey);
            return message;
        };

        /**
         * Creates a plain object from a C2GSSearchFriend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.C2GSSearchFriend
         * @static
         * @param {friend.C2GSSearchFriend} message C2GSSearchFriend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSSearchFriend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.sKey = "";
            if (message.sKey != null && message.hasOwnProperty("sKey"))
                object.sKey = message.sKey;
            return object;
        };

        /**
         * Converts this C2GSSearchFriend to JSON.
         * @function toJSON
         * @memberof friend.C2GSSearchFriend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSSearchFriend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSSearchFriend;
    })();

    friend.C2GSGetHistoryMsg = (function() {

        /**
         * Properties of a C2GSGetHistoryMsg.
         * @memberof friend
         * @interface IC2GSGetHistoryMsg
         * @property {number} pid C2GSGetHistoryMsg pid
         * @property {number} curidx C2GSGetHistoryMsg curidx
         */

        /**
         * Constructs a new C2GSGetHistoryMsg.
         * @memberof friend
         * @classdesc Represents a C2GSGetHistoryMsg.
         * @implements IC2GSGetHistoryMsg
         * @constructor
         * @param {friend.IC2GSGetHistoryMsg=} [properties] Properties to set
         */
        function C2GSGetHistoryMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSGetHistoryMsg pid.
         * @member {number} pid
         * @memberof friend.C2GSGetHistoryMsg
         * @instance
         */
        C2GSGetHistoryMsg.prototype.pid = 0;

        /**
         * C2GSGetHistoryMsg curidx.
         * @member {number} curidx
         * @memberof friend.C2GSGetHistoryMsg
         * @instance
         */
        C2GSGetHistoryMsg.prototype.curidx = 0;

        /**
         * Creates a new C2GSGetHistoryMsg instance using the specified properties.
         * @function create
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {friend.IC2GSGetHistoryMsg=} [properties] Properties to set
         * @returns {friend.C2GSGetHistoryMsg} C2GSGetHistoryMsg instance
         */
        C2GSGetHistoryMsg.create = function create(properties) {
            return new C2GSGetHistoryMsg(properties);
        };

        /**
         * Encodes the specified C2GSGetHistoryMsg message. Does not implicitly {@link friend.C2GSGetHistoryMsg.verify|verify} messages.
         * @function encode
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {friend.IC2GSGetHistoryMsg} message C2GSGetHistoryMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSGetHistoryMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.pid);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.curidx);
            return writer;
        };

        /**
         * Encodes the specified C2GSGetHistoryMsg message, length delimited. Does not implicitly {@link friend.C2GSGetHistoryMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {friend.IC2GSGetHistoryMsg} message C2GSGetHistoryMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSGetHistoryMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSGetHistoryMsg message from the specified reader or buffer.
         * @function decode
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {friend.C2GSGetHistoryMsg} C2GSGetHistoryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSGetHistoryMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.friend.C2GSGetHistoryMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.sint32();
                    break;
                case 2:
                    message.curidx = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("pid"))
                throw $util.ProtocolError("missing required 'pid'", { instance: message });
            if (!message.hasOwnProperty("curidx"))
                throw $util.ProtocolError("missing required 'curidx'", { instance: message });
            return message;
        };

        /**
         * Decodes a C2GSGetHistoryMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {friend.C2GSGetHistoryMsg} C2GSGetHistoryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSGetHistoryMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSGetHistoryMsg message.
         * @function verify
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSGetHistoryMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.pid))
                return "pid: integer expected";
            if (!$util.isInteger(message.curidx))
                return "curidx: integer expected";
            return null;
        };

        /**
         * Creates a C2GSGetHistoryMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {friend.C2GSGetHistoryMsg} C2GSGetHistoryMsg
         */
        C2GSGetHistoryMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.friend.C2GSGetHistoryMsg)
                return object;
            let message = new $root.friend.C2GSGetHistoryMsg();
            if (object.pid != null)
                message.pid = object.pid | 0;
            if (object.curidx != null)
                message.curidx = object.curidx | 0;
            return message;
        };

        /**
         * Creates a plain object from a C2GSGetHistoryMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof friend.C2GSGetHistoryMsg
         * @static
         * @param {friend.C2GSGetHistoryMsg} message C2GSGetHistoryMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSGetHistoryMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pid = 0;
                object.curidx = 0;
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.curidx != null && message.hasOwnProperty("curidx"))
                object.curidx = message.curidx;
            return object;
        };

        /**
         * Converts this C2GSGetHistoryMsg to JSON.
         * @function toJSON
         * @memberof friend.C2GSGetHistoryMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSGetHistoryMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSGetHistoryMsg;
    })();

    return friend;
})();

export const login = $root.login = (() => {

    /**
     * Namespace login.
     * @exports login
     * @namespace
     */
    const login = {};

    login.GS2CLoginCode = (function() {

        /**
         * Properties of a GS2CLoginCode.
         * @memberof login
         * @interface IGS2CLoginCode
         * @property {login.GS2CLoginCode.Code} eLogincode GS2CLoginCode eLogincode
         */

        /**
         * Constructs a new GS2CLoginCode.
         * @memberof login
         * @classdesc Represents a GS2CLoginCode.
         * @implements IGS2CLoginCode
         * @constructor
         * @param {login.IGS2CLoginCode=} [properties] Properties to set
         */
        function GS2CLoginCode(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GS2CLoginCode eLogincode.
         * @member {login.GS2CLoginCode.Code} eLogincode
         * @memberof login.GS2CLoginCode
         * @instance
         */
        GS2CLoginCode.prototype.eLogincode = 0;

        /**
         * Creates a new GS2CLoginCode instance using the specified properties.
         * @function create
         * @memberof login.GS2CLoginCode
         * @static
         * @param {login.IGS2CLoginCode=} [properties] Properties to set
         * @returns {login.GS2CLoginCode} GS2CLoginCode instance
         */
        GS2CLoginCode.create = function create(properties) {
            return new GS2CLoginCode(properties);
        };

        /**
         * Encodes the specified GS2CLoginCode message. Does not implicitly {@link login.GS2CLoginCode.verify|verify} messages.
         * @function encode
         * @memberof login.GS2CLoginCode
         * @static
         * @param {login.IGS2CLoginCode} message GS2CLoginCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CLoginCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eLogincode);
            return writer;
        };

        /**
         * Encodes the specified GS2CLoginCode message, length delimited. Does not implicitly {@link login.GS2CLoginCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.GS2CLoginCode
         * @static
         * @param {login.IGS2CLoginCode} message GS2CLoginCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CLoginCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GS2CLoginCode message from the specified reader or buffer.
         * @function decode
         * @memberof login.GS2CLoginCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.GS2CLoginCode} GS2CLoginCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CLoginCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GS2CLoginCode();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eLogincode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("eLogincode"))
                throw $util.ProtocolError("missing required 'eLogincode'", { instance: message });
            return message;
        };

        /**
         * Decodes a GS2CLoginCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.GS2CLoginCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.GS2CLoginCode} GS2CLoginCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CLoginCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GS2CLoginCode message.
         * @function verify
         * @memberof login.GS2CLoginCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GS2CLoginCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.eLogincode) {
            default:
                return "eLogincode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            return null;
        };

        /**
         * Creates a GS2CLoginCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.GS2CLoginCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.GS2CLoginCode} GS2CLoginCode
         */
        GS2CLoginCode.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GS2CLoginCode)
                return object;
            let message = new $root.login.GS2CLoginCode();
            switch (object.eLogincode) {
            case "SUCCEED":
            case 0:
                message.eLogincode = 0;
                break;
            case "NOACCOUNT":
            case 1:
                message.eLogincode = 1;
                break;
            case "NETERR":
            case 2:
                message.eLogincode = 2;
                break;
            case "TOKENERR":
            case 3:
                message.eLogincode = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GS2CLoginCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.GS2CLoginCode
         * @static
         * @param {login.GS2CLoginCode} message GS2CLoginCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GS2CLoginCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.eLogincode = options.enums === String ? "SUCCEED" : 0;
            if (message.eLogincode != null && message.hasOwnProperty("eLogincode"))
                object.eLogincode = options.enums === String ? $root.login.GS2CLoginCode.Code[message.eLogincode] : message.eLogincode;
            return object;
        };

        /**
         * Converts this GS2CLoginCode to JSON.
         * @function toJSON
         * @memberof login.GS2CLoginCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GS2CLoginCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Code enum.
         * @name login.GS2CLoginCode.Code
         * @enum {string}
         * @property {number} SUCCEED=0 SUCCEED value
         * @property {number} NOACCOUNT=1 NOACCOUNT value
         * @property {number} NETERR=2 NETERR value
         * @property {number} TOKENERR=3 TOKENERR value
         */
        GS2CLoginCode.Code = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCEED"] = 0;
            values[valuesById[1] = "NOACCOUNT"] = 1;
            values[valuesById[2] = "NETERR"] = 2;
            values[valuesById[3] = "TOKENERR"] = 3;
            return values;
        })();

        return GS2CLoginCode;
    })();

    login.GS2CLoginSucc = (function() {

        /**
         * Properties of a GS2CLoginSucc.
         * @memberof login
         * @interface IGS2CLoginSucc
         * @property {string} sName GS2CLoginSucc sName
         * @property {string} sGameFlag GS2CLoginSucc sGameFlag
         */

        /**
         * Constructs a new GS2CLoginSucc.
         * @memberof login
         * @classdesc Represents a GS2CLoginSucc.
         * @implements IGS2CLoginSucc
         * @constructor
         * @param {login.IGS2CLoginSucc=} [properties] Properties to set
         */
        function GS2CLoginSucc(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GS2CLoginSucc sName.
         * @member {string} sName
         * @memberof login.GS2CLoginSucc
         * @instance
         */
        GS2CLoginSucc.prototype.sName = "";

        /**
         * GS2CLoginSucc sGameFlag.
         * @member {string} sGameFlag
         * @memberof login.GS2CLoginSucc
         * @instance
         */
        GS2CLoginSucc.prototype.sGameFlag = "";

        /**
         * Creates a new GS2CLoginSucc instance using the specified properties.
         * @function create
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {login.IGS2CLoginSucc=} [properties] Properties to set
         * @returns {login.GS2CLoginSucc} GS2CLoginSucc instance
         */
        GS2CLoginSucc.create = function create(properties) {
            return new GS2CLoginSucc(properties);
        };

        /**
         * Encodes the specified GS2CLoginSucc message. Does not implicitly {@link login.GS2CLoginSucc.verify|verify} messages.
         * @function encode
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {login.IGS2CLoginSucc} message GS2CLoginSucc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CLoginSucc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sGameFlag);
            return writer;
        };

        /**
         * Encodes the specified GS2CLoginSucc message, length delimited. Does not implicitly {@link login.GS2CLoginSucc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {login.IGS2CLoginSucc} message GS2CLoginSucc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GS2CLoginSucc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GS2CLoginSucc message from the specified reader or buffer.
         * @function decode
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.GS2CLoginSucc} GS2CLoginSucc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CLoginSucc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GS2CLoginSucc();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sName = reader.string();
                    break;
                case 2:
                    message.sGameFlag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sName"))
                throw $util.ProtocolError("missing required 'sName'", { instance: message });
            if (!message.hasOwnProperty("sGameFlag"))
                throw $util.ProtocolError("missing required 'sGameFlag'", { instance: message });
            return message;
        };

        /**
         * Decodes a GS2CLoginSucc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.GS2CLoginSucc} GS2CLoginSucc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GS2CLoginSucc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GS2CLoginSucc message.
         * @function verify
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GS2CLoginSucc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sName))
                return "sName: string expected";
            if (!$util.isString(message.sGameFlag))
                return "sGameFlag: string expected";
            return null;
        };

        /**
         * Creates a GS2CLoginSucc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.GS2CLoginSucc} GS2CLoginSucc
         */
        GS2CLoginSucc.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GS2CLoginSucc)
                return object;
            let message = new $root.login.GS2CLoginSucc();
            if (object.sName != null)
                message.sName = String(object.sName);
            if (object.sGameFlag != null)
                message.sGameFlag = String(object.sGameFlag);
            return message;
        };

        /**
         * Creates a plain object from a GS2CLoginSucc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.GS2CLoginSucc
         * @static
         * @param {login.GS2CLoginSucc} message GS2CLoginSucc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GS2CLoginSucc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sName = "";
                object.sGameFlag = "";
            }
            if (message.sName != null && message.hasOwnProperty("sName"))
                object.sName = message.sName;
            if (message.sGameFlag != null && message.hasOwnProperty("sGameFlag"))
                object.sGameFlag = message.sGameFlag;
            return object;
        };

        /**
         * Converts this GS2CLoginSucc to JSON.
         * @function toJSON
         * @memberof login.GS2CLoginSucc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GS2CLoginSucc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GS2CLoginSucc;
    })();

    login.C2GSVertify = (function() {

        /**
         * Properties of a C2GSVertify.
         * @memberof login
         * @interface IC2GSVertify
         * @property {string} sToken C2GSVertify sToken
         */

        /**
         * Constructs a new C2GSVertify.
         * @memberof login
         * @classdesc Represents a C2GSVertify.
         * @implements IC2GSVertify
         * @constructor
         * @param {login.IC2GSVertify=} [properties] Properties to set
         */
        function C2GSVertify(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2GSVertify sToken.
         * @member {string} sToken
         * @memberof login.C2GSVertify
         * @instance
         */
        C2GSVertify.prototype.sToken = "";

        /**
         * Creates a new C2GSVertify instance using the specified properties.
         * @function create
         * @memberof login.C2GSVertify
         * @static
         * @param {login.IC2GSVertify=} [properties] Properties to set
         * @returns {login.C2GSVertify} C2GSVertify instance
         */
        C2GSVertify.create = function create(properties) {
            return new C2GSVertify(properties);
        };

        /**
         * Encodes the specified C2GSVertify message. Does not implicitly {@link login.C2GSVertify.verify|verify} messages.
         * @function encode
         * @memberof login.C2GSVertify
         * @static
         * @param {login.IC2GSVertify} message C2GSVertify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSVertify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sToken);
            return writer;
        };

        /**
         * Encodes the specified C2GSVertify message, length delimited. Does not implicitly {@link login.C2GSVertify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.C2GSVertify
         * @static
         * @param {login.IC2GSVertify} message C2GSVertify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2GSVertify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2GSVertify message from the specified reader or buffer.
         * @function decode
         * @memberof login.C2GSVertify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.C2GSVertify} C2GSVertify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSVertify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.C2GSVertify();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sToken"))
                throw $util.ProtocolError("missing required 'sToken'", { instance: message });
            return message;
        };

        /**
         * Decodes a C2GSVertify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.C2GSVertify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.C2GSVertify} C2GSVertify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2GSVertify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2GSVertify message.
         * @function verify
         * @memberof login.C2GSVertify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2GSVertify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sToken))
                return "sToken: string expected";
            return null;
        };

        /**
         * Creates a C2GSVertify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.C2GSVertify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.C2GSVertify} C2GSVertify
         */
        C2GSVertify.fromObject = function fromObject(object) {
            if (object instanceof $root.login.C2GSVertify)
                return object;
            let message = new $root.login.C2GSVertify();
            if (object.sToken != null)
                message.sToken = String(object.sToken);
            return message;
        };

        /**
         * Creates a plain object from a C2GSVertify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.C2GSVertify
         * @static
         * @param {login.C2GSVertify} message C2GSVertify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2GSVertify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.sToken = "";
            if (message.sToken != null && message.hasOwnProperty("sToken"))
                object.sToken = message.sToken;
            return object;
        };

        /**
         * Converts this C2GSVertify to JSON.
         * @function toJSON
         * @memberof login.C2GSVertify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2GSVertify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2GSVertify;
    })();

    return login;
})();

export const netcommand = $root.netcommand = (() => {

    /**
     * Namespace netcommand.
     * @exports netcommand
     * @namespace
     */
    const netcommand = {};

    /**
     * PROTOFILE enum.
     * @name netcommand.PROTOFILE
     * @enum {string}
     * @property {number} login=1 login value
     * @property {number} friend=2 friend value
     */
    netcommand.PROTOFILE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "login"] = 1;
        values[valuesById[2] = "friend"] = 2;
        return values;
    })();

    netcommand.NetCommand = (function() {

        /**
         * Properties of a NetCommand.
         * @memberof netcommand
         * @interface INetCommand
         * @property {netcommand.PROTOFILE} eProtofile NetCommand eProtofile
         * @property {number} iCmd NetCommand iCmd
         * @property {Uint8Array|null} [sEncodepkg] NetCommand sEncodepkg
         */

        /**
         * Constructs a new NetCommand.
         * @memberof netcommand
         * @classdesc Represents a NetCommand.
         * @implements INetCommand
         * @constructor
         * @param {netcommand.INetCommand=} [properties] Properties to set
         */
        function NetCommand(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NetCommand eProtofile.
         * @member {netcommand.PROTOFILE} eProtofile
         * @memberof netcommand.NetCommand
         * @instance
         */
        NetCommand.prototype.eProtofile = 1;

        /**
         * NetCommand iCmd.
         * @member {number} iCmd
         * @memberof netcommand.NetCommand
         * @instance
         */
        NetCommand.prototype.iCmd = 0;

        /**
         * NetCommand sEncodepkg.
         * @member {Uint8Array} sEncodepkg
         * @memberof netcommand.NetCommand
         * @instance
         */
        NetCommand.prototype.sEncodepkg = $util.newBuffer([]);

        /**
         * Creates a new NetCommand instance using the specified properties.
         * @function create
         * @memberof netcommand.NetCommand
         * @static
         * @param {netcommand.INetCommand=} [properties] Properties to set
         * @returns {netcommand.NetCommand} NetCommand instance
         */
        NetCommand.create = function create(properties) {
            return new NetCommand(properties);
        };

        /**
         * Encodes the specified NetCommand message. Does not implicitly {@link netcommand.NetCommand.verify|verify} messages.
         * @function encode
         * @memberof netcommand.NetCommand
         * @static
         * @param {netcommand.INetCommand} message NetCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eProtofile);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.iCmd);
            if (message.sEncodepkg != null && message.hasOwnProperty("sEncodepkg"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.sEncodepkg);
            return writer;
        };

        /**
         * Encodes the specified NetCommand message, length delimited. Does not implicitly {@link netcommand.NetCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netcommand.NetCommand
         * @static
         * @param {netcommand.INetCommand} message NetCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NetCommand message from the specified reader or buffer.
         * @function decode
         * @memberof netcommand.NetCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netcommand.NetCommand} NetCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.netcommand.NetCommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eProtofile = reader.int32();
                    break;
                case 2:
                    message.iCmd = reader.sint32();
                    break;
                case 3:
                    message.sEncodepkg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("eProtofile"))
                throw $util.ProtocolError("missing required 'eProtofile'", { instance: message });
            if (!message.hasOwnProperty("iCmd"))
                throw $util.ProtocolError("missing required 'iCmd'", { instance: message });
            return message;
        };

        /**
         * Decodes a NetCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netcommand.NetCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netcommand.NetCommand} NetCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NetCommand message.
         * @function verify
         * @memberof netcommand.NetCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.eProtofile) {
            default:
                return "eProtofile: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (!$util.isInteger(message.iCmd))
                return "iCmd: integer expected";
            if (message.sEncodepkg != null && message.hasOwnProperty("sEncodepkg"))
                if (!(message.sEncodepkg && typeof message.sEncodepkg.length === "number" || $util.isString(message.sEncodepkg)))
                    return "sEncodepkg: buffer expected";
            return null;
        };

        /**
         * Creates a NetCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netcommand.NetCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netcommand.NetCommand} NetCommand
         */
        NetCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.netcommand.NetCommand)
                return object;
            let message = new $root.netcommand.NetCommand();
            switch (object.eProtofile) {
            case "login":
            case 1:
                message.eProtofile = 1;
                break;
            case "friend":
            case 2:
                message.eProtofile = 2;
                break;
            }
            if (object.iCmd != null)
                message.iCmd = object.iCmd | 0;
            if (object.sEncodepkg != null)
                if (typeof object.sEncodepkg === "string")
                    $util.base64.decode(object.sEncodepkg, message.sEncodepkg = $util.newBuffer($util.base64.length(object.sEncodepkg)), 0);
                else if (object.sEncodepkg.length)
                    message.sEncodepkg = object.sEncodepkg;
            return message;
        };

        /**
         * Creates a plain object from a NetCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netcommand.NetCommand
         * @static
         * @param {netcommand.NetCommand} message NetCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.eProtofile = options.enums === String ? "login" : 1;
                object.iCmd = 0;
                if (options.bytes === String)
                    object.sEncodepkg = "";
                else {
                    object.sEncodepkg = [];
                    if (options.bytes !== Array)
                        object.sEncodepkg = $util.newBuffer(object.sEncodepkg);
                }
            }
            if (message.eProtofile != null && message.hasOwnProperty("eProtofile"))
                object.eProtofile = options.enums === String ? $root.netcommand.PROTOFILE[message.eProtofile] : message.eProtofile;
            if (message.iCmd != null && message.hasOwnProperty("iCmd"))
                object.iCmd = message.iCmd;
            if (message.sEncodepkg != null && message.hasOwnProperty("sEncodepkg"))
                object.sEncodepkg = options.bytes === String ? $util.base64.encode(message.sEncodepkg, 0, message.sEncodepkg.length) : options.bytes === Array ? Array.prototype.slice.call(message.sEncodepkg) : message.sEncodepkg;
            return object;
        };

        /**
         * Converts this NetCommand to JSON.
         * @function toJSON
         * @memberof netcommand.NetCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NetCommand;
    })();

    return netcommand;
})();

export { $root as default };
