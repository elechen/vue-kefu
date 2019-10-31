import * as $protobuf from "protobufjs";
/** Namespace friend. */
export namespace friend {

    /** Properties of a GS2CNewMsgCnt. */
    interface IGS2CNewMsgCnt {

        /** GS2CNewMsgCnt iSender */
        iSender: number;

        /** GS2CNewMsgCnt iCnt */
        iCnt: number;
    }

    /** Represents a GS2CNewMsgCnt. */
    class GS2CNewMsgCnt implements IGS2CNewMsgCnt {

        /**
         * Constructs a new GS2CNewMsgCnt.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IGS2CNewMsgCnt);

        /** GS2CNewMsgCnt iSender. */
        public iSender: number;

        /** GS2CNewMsgCnt iCnt. */
        public iCnt: number;

        /**
         * Creates a new GS2CNewMsgCnt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GS2CNewMsgCnt instance
         */
        public static create(properties?: friend.IGS2CNewMsgCnt): friend.GS2CNewMsgCnt;

        /**
         * Encodes the specified GS2CNewMsgCnt message. Does not implicitly {@link friend.GS2CNewMsgCnt.verify|verify} messages.
         * @param message GS2CNewMsgCnt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IGS2CNewMsgCnt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GS2CNewMsgCnt message, length delimited. Does not implicitly {@link friend.GS2CNewMsgCnt.verify|verify} messages.
         * @param message GS2CNewMsgCnt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IGS2CNewMsgCnt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GS2CNewMsgCnt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GS2CNewMsgCnt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.GS2CNewMsgCnt;

        /**
         * Decodes a GS2CNewMsgCnt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GS2CNewMsgCnt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.GS2CNewMsgCnt;

        /**
         * Verifies a GS2CNewMsgCnt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GS2CNewMsgCnt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GS2CNewMsgCnt
         */
        public static fromObject(object: { [k: string]: any }): friend.GS2CNewMsgCnt;

        /**
         * Creates a plain object from a GS2CNewMsgCnt message. Also converts values to other types if specified.
         * @param message GS2CNewMsgCnt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.GS2CNewMsgCnt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GS2CNewMsgCnt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GS2CSendFrdMsg. */
    interface IGS2CSendFrdMsg {

        /** GS2CSendFrdMsg id */
        id: number;

        /** GS2CSendFrdMsg iSender */
        iSender: number;

        /** GS2CSendFrdMsg sMsg */
        sMsg: string;

        /** GS2CSendFrdMsg iMsgType */
        iMsgType: number;

        /** GS2CSendFrdMsg iTime */
        iTime: number;
    }

    /** Represents a GS2CSendFrdMsg. */
    class GS2CSendFrdMsg implements IGS2CSendFrdMsg {

        /**
         * Constructs a new GS2CSendFrdMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IGS2CSendFrdMsg);

        /** GS2CSendFrdMsg id. */
        public id: number;

        /** GS2CSendFrdMsg iSender. */
        public iSender: number;

        /** GS2CSendFrdMsg sMsg. */
        public sMsg: string;

        /** GS2CSendFrdMsg iMsgType. */
        public iMsgType: number;

        /** GS2CSendFrdMsg iTime. */
        public iTime: number;

        /**
         * Creates a new GS2CSendFrdMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GS2CSendFrdMsg instance
         */
        public static create(properties?: friend.IGS2CSendFrdMsg): friend.GS2CSendFrdMsg;

        /**
         * Encodes the specified GS2CSendFrdMsg message. Does not implicitly {@link friend.GS2CSendFrdMsg.verify|verify} messages.
         * @param message GS2CSendFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IGS2CSendFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GS2CSendFrdMsg message, length delimited. Does not implicitly {@link friend.GS2CSendFrdMsg.verify|verify} messages.
         * @param message GS2CSendFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IGS2CSendFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GS2CSendFrdMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GS2CSendFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.GS2CSendFrdMsg;

        /**
         * Decodes a GS2CSendFrdMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GS2CSendFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.GS2CSendFrdMsg;

        /**
         * Verifies a GS2CSendFrdMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GS2CSendFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GS2CSendFrdMsg
         */
        public static fromObject(object: { [k: string]: any }): friend.GS2CSendFrdMsg;

        /**
         * Creates a plain object from a GS2CSendFrdMsg message. Also converts values to other types if specified.
         * @param message GS2CSendFrdMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.GS2CSendFrdMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GS2CSendFrdMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GSNewFrdMsg. */
    interface IC2GSNewFrdMsg {

        /** C2GSNewFrdMsg iTarget */
        iTarget: number;

        /** C2GSNewFrdMsg sMsg */
        sMsg: string;
    }

    /** Represents a C2GSNewFrdMsg. */
    class C2GSNewFrdMsg implements IC2GSNewFrdMsg {

        /**
         * Constructs a new C2GSNewFrdMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IC2GSNewFrdMsg);

        /** C2GSNewFrdMsg iTarget. */
        public iTarget: number;

        /** C2GSNewFrdMsg sMsg. */
        public sMsg: string;

        /**
         * Creates a new C2GSNewFrdMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSNewFrdMsg instance
         */
        public static create(properties?: friend.IC2GSNewFrdMsg): friend.C2GSNewFrdMsg;

        /**
         * Encodes the specified C2GSNewFrdMsg message. Does not implicitly {@link friend.C2GSNewFrdMsg.verify|verify} messages.
         * @param message C2GSNewFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IC2GSNewFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSNewFrdMsg message, length delimited. Does not implicitly {@link friend.C2GSNewFrdMsg.verify|verify} messages.
         * @param message C2GSNewFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IC2GSNewFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSNewFrdMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSNewFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.C2GSNewFrdMsg;

        /**
         * Decodes a C2GSNewFrdMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSNewFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.C2GSNewFrdMsg;

        /**
         * Verifies a C2GSNewFrdMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSNewFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSNewFrdMsg
         */
        public static fromObject(object: { [k: string]: any }): friend.C2GSNewFrdMsg;

        /**
         * Creates a plain object from a C2GSNewFrdMsg message. Also converts values to other types if specified.
         * @param message C2GSNewFrdMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.C2GSNewFrdMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSNewFrdMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GSReadFrdMsg. */
    interface IC2GSReadFrdMsg {

        /** C2GSReadFrdMsg iSender */
        iSender: number;
    }

    /** Represents a C2GSReadFrdMsg. */
    class C2GSReadFrdMsg implements IC2GSReadFrdMsg {

        /**
         * Constructs a new C2GSReadFrdMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IC2GSReadFrdMsg);

        /** C2GSReadFrdMsg iSender. */
        public iSender: number;

        /**
         * Creates a new C2GSReadFrdMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSReadFrdMsg instance
         */
        public static create(properties?: friend.IC2GSReadFrdMsg): friend.C2GSReadFrdMsg;

        /**
         * Encodes the specified C2GSReadFrdMsg message. Does not implicitly {@link friend.C2GSReadFrdMsg.verify|verify} messages.
         * @param message C2GSReadFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IC2GSReadFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSReadFrdMsg message, length delimited. Does not implicitly {@link friend.C2GSReadFrdMsg.verify|verify} messages.
         * @param message C2GSReadFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IC2GSReadFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSReadFrdMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSReadFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.C2GSReadFrdMsg;

        /**
         * Decodes a C2GSReadFrdMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSReadFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.C2GSReadFrdMsg;

        /**
         * Verifies a C2GSReadFrdMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSReadFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSReadFrdMsg
         */
        public static fromObject(object: { [k: string]: any }): friend.C2GSReadFrdMsg;

        /**
         * Creates a plain object from a C2GSReadFrdMsg message. Also converts values to other types if specified.
         * @param message C2GSReadFrdMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.C2GSReadFrdMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSReadFrdMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GSReplyFrdMsg. */
    interface IC2GSReplyFrdMsg {

        /** C2GSReplyFrdMsg id */
        id: number;
    }

    /** Represents a C2GSReplyFrdMsg. */
    class C2GSReplyFrdMsg implements IC2GSReplyFrdMsg {

        /**
         * Constructs a new C2GSReplyFrdMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IC2GSReplyFrdMsg);

        /** C2GSReplyFrdMsg id. */
        public id: number;

        /**
         * Creates a new C2GSReplyFrdMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSReplyFrdMsg instance
         */
        public static create(properties?: friend.IC2GSReplyFrdMsg): friend.C2GSReplyFrdMsg;

        /**
         * Encodes the specified C2GSReplyFrdMsg message. Does not implicitly {@link friend.C2GSReplyFrdMsg.verify|verify} messages.
         * @param message C2GSReplyFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IC2GSReplyFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSReplyFrdMsg message, length delimited. Does not implicitly {@link friend.C2GSReplyFrdMsg.verify|verify} messages.
         * @param message C2GSReplyFrdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IC2GSReplyFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSReplyFrdMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSReplyFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.C2GSReplyFrdMsg;

        /**
         * Decodes a C2GSReplyFrdMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSReplyFrdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.C2GSReplyFrdMsg;

        /**
         * Verifies a C2GSReplyFrdMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSReplyFrdMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSReplyFrdMsg
         */
        public static fromObject(object: { [k: string]: any }): friend.C2GSReplyFrdMsg;

        /**
         * Creates a plain object from a C2GSReplyFrdMsg message. Also converts values to other types if specified.
         * @param message C2GSReplyFrdMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.C2GSReplyFrdMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSReplyFrdMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace login. */
export namespace login {

    /** Properties of a GS2CLoginCode. */
    interface IGS2CLoginCode {

        /** GS2CLoginCode eLogincode */
        eLogincode: login.GS2CLoginCode.Code;
    }

    /** Represents a GS2CLoginCode. */
    class GS2CLoginCode implements IGS2CLoginCode {

        /**
         * Constructs a new GS2CLoginCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGS2CLoginCode);

        /** GS2CLoginCode eLogincode. */
        public eLogincode: login.GS2CLoginCode.Code;

        /**
         * Creates a new GS2CLoginCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GS2CLoginCode instance
         */
        public static create(properties?: login.IGS2CLoginCode): login.GS2CLoginCode;

        /**
         * Encodes the specified GS2CLoginCode message. Does not implicitly {@link login.GS2CLoginCode.verify|verify} messages.
         * @param message GS2CLoginCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGS2CLoginCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GS2CLoginCode message, length delimited. Does not implicitly {@link login.GS2CLoginCode.verify|verify} messages.
         * @param message GS2CLoginCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGS2CLoginCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GS2CLoginCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GS2CLoginCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GS2CLoginCode;

        /**
         * Decodes a GS2CLoginCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GS2CLoginCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GS2CLoginCode;

        /**
         * Verifies a GS2CLoginCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GS2CLoginCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GS2CLoginCode
         */
        public static fromObject(object: { [k: string]: any }): login.GS2CLoginCode;

        /**
         * Creates a plain object from a GS2CLoginCode message. Also converts values to other types if specified.
         * @param message GS2CLoginCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GS2CLoginCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GS2CLoginCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GS2CLoginCode {

        /** Code enum. */
        enum Code {
            SUCCEED = 0,
            NOACCOUNT = 1,
            NETERR = 2,
            TOKENERR = 3
        }
    }

    /** Properties of a C2GSVertify. */
    interface IC2GSVertify {

        /** C2GSVertify Name */
        Name: string;

        /** C2GSVertify sToken */
        sToken: string;
    }

    /** Represents a C2GSVertify. */
    class C2GSVertify implements IC2GSVertify {

        /**
         * Constructs a new C2GSVertify.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IC2GSVertify);

        /** C2GSVertify Name. */
        public Name: string;

        /** C2GSVertify sToken. */
        public sToken: string;

        /**
         * Creates a new C2GSVertify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSVertify instance
         */
        public static create(properties?: login.IC2GSVertify): login.C2GSVertify;

        /**
         * Encodes the specified C2GSVertify message. Does not implicitly {@link login.C2GSVertify.verify|verify} messages.
         * @param message C2GSVertify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IC2GSVertify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSVertify message, length delimited. Does not implicitly {@link login.C2GSVertify.verify|verify} messages.
         * @param message C2GSVertify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IC2GSVertify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSVertify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSVertify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.C2GSVertify;

        /**
         * Decodes a C2GSVertify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSVertify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.C2GSVertify;

        /**
         * Verifies a C2GSVertify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSVertify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSVertify
         */
        public static fromObject(object: { [k: string]: any }): login.C2GSVertify;

        /**
         * Creates a plain object from a C2GSVertify message. Also converts values to other types if specified.
         * @param message C2GSVertify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.C2GSVertify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSVertify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace netcommand. */
export namespace netcommand {

    /** PROTOFILE enum. */
    enum PROTOFILE {
        login = 1,
        friend = 2
    }

    /** Properties of a NetCommand. */
    interface INetCommand {

        /** NetCommand eProtofile */
        eProtofile: netcommand.PROTOFILE;

        /** NetCommand iCmd */
        iCmd: number;

        /** NetCommand sEncodepkg */
        sEncodepkg?: (Uint8Array|null);
    }

    /** Represents a NetCommand. */
    class NetCommand implements INetCommand {

        /**
         * Constructs a new NetCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: netcommand.INetCommand);

        /** NetCommand eProtofile. */
        public eProtofile: netcommand.PROTOFILE;

        /** NetCommand iCmd. */
        public iCmd: number;

        /** NetCommand sEncodepkg. */
        public sEncodepkg: Uint8Array;

        /**
         * Creates a new NetCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetCommand instance
         */
        public static create(properties?: netcommand.INetCommand): netcommand.NetCommand;

        /**
         * Encodes the specified NetCommand message. Does not implicitly {@link netcommand.NetCommand.verify|verify} messages.
         * @param message NetCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netcommand.INetCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NetCommand message, length delimited. Does not implicitly {@link netcommand.NetCommand.verify|verify} messages.
         * @param message NetCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netcommand.INetCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netcommand.NetCommand;

        /**
         * Decodes a NetCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NetCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netcommand.NetCommand;

        /**
         * Verifies a NetCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NetCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetCommand
         */
        public static fromObject(object: { [k: string]: any }): netcommand.NetCommand;

        /**
         * Creates a plain object from a NetCommand message. Also converts values to other types if specified.
         * @param message NetCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netcommand.NetCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
