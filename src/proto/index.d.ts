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

        /** GS2CSendFrdMsg pid */
        pid: number;

        /** GS2CSendFrdMsg tFrdMsg */
        tFrdMsg?: (friend.GS2CSendFrdMsg.IFrdMsg[]|null);

        /** GS2CSendFrdMsg iFlag */
        iFlag?: (number|null);
    }

    /** Represents a GS2CSendFrdMsg. */
    class GS2CSendFrdMsg implements IGS2CSendFrdMsg {

        /**
         * Constructs a new GS2CSendFrdMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IGS2CSendFrdMsg);

        /** GS2CSendFrdMsg pid. */
        public pid: number;

        /** GS2CSendFrdMsg tFrdMsg. */
        public tFrdMsg: friend.GS2CSendFrdMsg.IFrdMsg[];

        /** GS2CSendFrdMsg iFlag. */
        public iFlag: number;

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

    namespace GS2CSendFrdMsg {

        /** Properties of a FrdMsg. */
        interface IFrdMsg {

            /** FrdMsg id */
            id: number;

            /** FrdMsg iSender */
            iSender: number;

            /** FrdMsg sName */
            sName: string;

            /** FrdMsg sMsg */
            sMsg: string;

            /** FrdMsg iTime */
            iTime: number;
        }

        /** Represents a FrdMsg. */
        class FrdMsg implements IFrdMsg {

            /**
             * Constructs a new FrdMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: friend.GS2CSendFrdMsg.IFrdMsg);

            /** FrdMsg id. */
            public id: number;

            /** FrdMsg iSender. */
            public iSender: number;

            /** FrdMsg sName. */
            public sName: string;

            /** FrdMsg sMsg. */
            public sMsg: string;

            /** FrdMsg iTime. */
            public iTime: number;

            /**
             * Creates a new FrdMsg instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FrdMsg instance
             */
            public static create(properties?: friend.GS2CSendFrdMsg.IFrdMsg): friend.GS2CSendFrdMsg.FrdMsg;

            /**
             * Encodes the specified FrdMsg message. Does not implicitly {@link friend.GS2CSendFrdMsg.FrdMsg.verify|verify} messages.
             * @param message FrdMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: friend.GS2CSendFrdMsg.IFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FrdMsg message, length delimited. Does not implicitly {@link friend.GS2CSendFrdMsg.FrdMsg.verify|verify} messages.
             * @param message FrdMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: friend.GS2CSendFrdMsg.IFrdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FrdMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FrdMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.GS2CSendFrdMsg.FrdMsg;

            /**
             * Decodes a FrdMsg message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FrdMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.GS2CSendFrdMsg.FrdMsg;

            /**
             * Verifies a FrdMsg message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FrdMsg message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FrdMsg
             */
            public static fromObject(object: { [k: string]: any }): friend.GS2CSendFrdMsg.FrdMsg;

            /**
             * Creates a plain object from a FrdMsg message. Also converts values to other types if specified.
             * @param message FrdMsg
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: friend.GS2CSendFrdMsg.FrdMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FrdMsg to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GS2CSendFrdInfo. */
    interface IGS2CSendFrdInfo {

        /** GS2CSendFrdInfo pid */
        pid: number;

        /** GS2CSendFrdInfo iOnline */
        iOnline: number;

        /** GS2CSendFrdInfo sName */
        sName: string;

        /** GS2CSendFrdInfo iGrade */
        iGrade: number;

        /** GS2CSendFrdInfo iServer */
        iServer: number;

        /** GS2CSendFrdInfo sPlatform */
        sPlatform: string;

        /** GS2CSendFrdInfo iMoneyMax */
        iMoneyMax: number;

        /** GS2CSendFrdInfo iChatTime */
        iChatTime: number;
    }

    /** Represents a GS2CSendFrdInfo. */
    class GS2CSendFrdInfo implements IGS2CSendFrdInfo {

        /**
         * Constructs a new GS2CSendFrdInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IGS2CSendFrdInfo);

        /** GS2CSendFrdInfo pid. */
        public pid: number;

        /** GS2CSendFrdInfo iOnline. */
        public iOnline: number;

        /** GS2CSendFrdInfo sName. */
        public sName: string;

        /** GS2CSendFrdInfo iGrade. */
        public iGrade: number;

        /** GS2CSendFrdInfo iServer. */
        public iServer: number;

        /** GS2CSendFrdInfo sPlatform. */
        public sPlatform: string;

        /** GS2CSendFrdInfo iMoneyMax. */
        public iMoneyMax: number;

        /** GS2CSendFrdInfo iChatTime. */
        public iChatTime: number;

        /**
         * Creates a new GS2CSendFrdInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GS2CSendFrdInfo instance
         */
        public static create(properties?: friend.IGS2CSendFrdInfo): friend.GS2CSendFrdInfo;

        /**
         * Encodes the specified GS2CSendFrdInfo message. Does not implicitly {@link friend.GS2CSendFrdInfo.verify|verify} messages.
         * @param message GS2CSendFrdInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IGS2CSendFrdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GS2CSendFrdInfo message, length delimited. Does not implicitly {@link friend.GS2CSendFrdInfo.verify|verify} messages.
         * @param message GS2CSendFrdInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IGS2CSendFrdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GS2CSendFrdInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GS2CSendFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.GS2CSendFrdInfo;

        /**
         * Decodes a GS2CSendFrdInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GS2CSendFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.GS2CSendFrdInfo;

        /**
         * Verifies a GS2CSendFrdInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GS2CSendFrdInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GS2CSendFrdInfo
         */
        public static fromObject(object: { [k: string]: any }): friend.GS2CSendFrdInfo;

        /**
         * Creates a plain object from a GS2CSendFrdInfo message. Also converts values to other types if specified.
         * @param message GS2CSendFrdInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.GS2CSendFrdInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GS2CSendFrdInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GS2CSearchResult. */
    interface IGS2CSearchResult {

        /** GS2CSearchResult tRet */
        tRet?: (friend.GS2CSearchResult.ISearchResult[]|null);
    }

    /** Represents a GS2CSearchResult. */
    class GS2CSearchResult implements IGS2CSearchResult {

        /**
         * Constructs a new GS2CSearchResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IGS2CSearchResult);

        /** GS2CSearchResult tRet. */
        public tRet: friend.GS2CSearchResult.ISearchResult[];

        /**
         * Creates a new GS2CSearchResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GS2CSearchResult instance
         */
        public static create(properties?: friend.IGS2CSearchResult): friend.GS2CSearchResult;

        /**
         * Encodes the specified GS2CSearchResult message. Does not implicitly {@link friend.GS2CSearchResult.verify|verify} messages.
         * @param message GS2CSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IGS2CSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GS2CSearchResult message, length delimited. Does not implicitly {@link friend.GS2CSearchResult.verify|verify} messages.
         * @param message GS2CSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IGS2CSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GS2CSearchResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GS2CSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.GS2CSearchResult;

        /**
         * Decodes a GS2CSearchResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GS2CSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.GS2CSearchResult;

        /**
         * Verifies a GS2CSearchResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GS2CSearchResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GS2CSearchResult
         */
        public static fromObject(object: { [k: string]: any }): friend.GS2CSearchResult;

        /**
         * Creates a plain object from a GS2CSearchResult message. Also converts values to other types if specified.
         * @param message GS2CSearchResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.GS2CSearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GS2CSearchResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GS2CSearchResult {

        /** Properties of a SearchResult. */
        interface ISearchResult {

            /** SearchResult id */
            id: number;

            /** SearchResult sName */
            sName: string;
        }

        /** Represents a SearchResult. */
        class SearchResult implements ISearchResult {

            /**
             * Constructs a new SearchResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: friend.GS2CSearchResult.ISearchResult);

            /** SearchResult id. */
            public id: number;

            /** SearchResult sName. */
            public sName: string;

            /**
             * Creates a new SearchResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchResult instance
             */
            public static create(properties?: friend.GS2CSearchResult.ISearchResult): friend.GS2CSearchResult.SearchResult;

            /**
             * Encodes the specified SearchResult message. Does not implicitly {@link friend.GS2CSearchResult.SearchResult.verify|verify} messages.
             * @param message SearchResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: friend.GS2CSearchResult.ISearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchResult message, length delimited. Does not implicitly {@link friend.GS2CSearchResult.SearchResult.verify|verify} messages.
             * @param message SearchResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: friend.GS2CSearchResult.ISearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.GS2CSearchResult.SearchResult;

            /**
             * Decodes a SearchResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.GS2CSearchResult.SearchResult;

            /**
             * Verifies a SearchResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchResult
             */
            public static fromObject(object: { [k: string]: any }): friend.GS2CSearchResult.SearchResult;

            /**
             * Creates a plain object from a SearchResult message. Also converts values to other types if specified.
             * @param message SearchResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: friend.GS2CSearchResult.SearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
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

        /** C2GSReplyFrdMsg iSender */
        iSender: number;

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

        /** C2GSReplyFrdMsg iSender. */
        public iSender: number;

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

    /** Properties of a C2GSGetFrdInfo. */
    interface IC2GSGetFrdInfo {

        /** C2GSGetFrdInfo pid */
        pid: number;
    }

    /** Represents a C2GSGetFrdInfo. */
    class C2GSGetFrdInfo implements IC2GSGetFrdInfo {

        /**
         * Constructs a new C2GSGetFrdInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IC2GSGetFrdInfo);

        /** C2GSGetFrdInfo pid. */
        public pid: number;

        /**
         * Creates a new C2GSGetFrdInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSGetFrdInfo instance
         */
        public static create(properties?: friend.IC2GSGetFrdInfo): friend.C2GSGetFrdInfo;

        /**
         * Encodes the specified C2GSGetFrdInfo message. Does not implicitly {@link friend.C2GSGetFrdInfo.verify|verify} messages.
         * @param message C2GSGetFrdInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IC2GSGetFrdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSGetFrdInfo message, length delimited. Does not implicitly {@link friend.C2GSGetFrdInfo.verify|verify} messages.
         * @param message C2GSGetFrdInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IC2GSGetFrdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSGetFrdInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSGetFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.C2GSGetFrdInfo;

        /**
         * Decodes a C2GSGetFrdInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSGetFrdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.C2GSGetFrdInfo;

        /**
         * Verifies a C2GSGetFrdInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSGetFrdInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSGetFrdInfo
         */
        public static fromObject(object: { [k: string]: any }): friend.C2GSGetFrdInfo;

        /**
         * Creates a plain object from a C2GSGetFrdInfo message. Also converts values to other types if specified.
         * @param message C2GSGetFrdInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.C2GSGetFrdInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSGetFrdInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GSSearchFriend. */
    interface IC2GSSearchFriend {

        /** C2GSSearchFriend sKey */
        sKey: string;
    }

    /** Represents a C2GSSearchFriend. */
    class C2GSSearchFriend implements IC2GSSearchFriend {

        /**
         * Constructs a new C2GSSearchFriend.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IC2GSSearchFriend);

        /** C2GSSearchFriend sKey. */
        public sKey: string;

        /**
         * Creates a new C2GSSearchFriend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSSearchFriend instance
         */
        public static create(properties?: friend.IC2GSSearchFriend): friend.C2GSSearchFriend;

        /**
         * Encodes the specified C2GSSearchFriend message. Does not implicitly {@link friend.C2GSSearchFriend.verify|verify} messages.
         * @param message C2GSSearchFriend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IC2GSSearchFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSSearchFriend message, length delimited. Does not implicitly {@link friend.C2GSSearchFriend.verify|verify} messages.
         * @param message C2GSSearchFriend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IC2GSSearchFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSSearchFriend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSSearchFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.C2GSSearchFriend;

        /**
         * Decodes a C2GSSearchFriend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSSearchFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.C2GSSearchFriend;

        /**
         * Verifies a C2GSSearchFriend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSSearchFriend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSSearchFriend
         */
        public static fromObject(object: { [k: string]: any }): friend.C2GSSearchFriend;

        /**
         * Creates a plain object from a C2GSSearchFriend message. Also converts values to other types if specified.
         * @param message C2GSSearchFriend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.C2GSSearchFriend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSSearchFriend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GSGetHistoryMsg. */
    interface IC2GSGetHistoryMsg {

        /** C2GSGetHistoryMsg pid */
        pid: number;

        /** C2GSGetHistoryMsg curidx */
        curidx: number;
    }

    /** Represents a C2GSGetHistoryMsg. */
    class C2GSGetHistoryMsg implements IC2GSGetHistoryMsg {

        /**
         * Constructs a new C2GSGetHistoryMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: friend.IC2GSGetHistoryMsg);

        /** C2GSGetHistoryMsg pid. */
        public pid: number;

        /** C2GSGetHistoryMsg curidx. */
        public curidx: number;

        /**
         * Creates a new C2GSGetHistoryMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2GSGetHistoryMsg instance
         */
        public static create(properties?: friend.IC2GSGetHistoryMsg): friend.C2GSGetHistoryMsg;

        /**
         * Encodes the specified C2GSGetHistoryMsg message. Does not implicitly {@link friend.C2GSGetHistoryMsg.verify|verify} messages.
         * @param message C2GSGetHistoryMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: friend.IC2GSGetHistoryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2GSGetHistoryMsg message, length delimited. Does not implicitly {@link friend.C2GSGetHistoryMsg.verify|verify} messages.
         * @param message C2GSGetHistoryMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: friend.IC2GSGetHistoryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2GSGetHistoryMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2GSGetHistoryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): friend.C2GSGetHistoryMsg;

        /**
         * Decodes a C2GSGetHistoryMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2GSGetHistoryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): friend.C2GSGetHistoryMsg;

        /**
         * Verifies a C2GSGetHistoryMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2GSGetHistoryMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2GSGetHistoryMsg
         */
        public static fromObject(object: { [k: string]: any }): friend.C2GSGetHistoryMsg;

        /**
         * Creates a plain object from a C2GSGetHistoryMsg message. Also converts values to other types if specified.
         * @param message C2GSGetHistoryMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: friend.C2GSGetHistoryMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2GSGetHistoryMsg to JSON.
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
            TOKENERR = 3,
            LOGINERR = 4,
            GAMEFLAGERR = 5,
            AUTHERR = 6
        }
    }

    /** Properties of a GS2CLoginSucc. */
    interface IGS2CLoginSucc {

        /** GS2CLoginSucc pid */
        pid: number;

        /** GS2CLoginSucc sName */
        sName: string;

        /** GS2CLoginSucc sGameFlag */
        sGameFlag: string;

        /** GS2CLoginSucc gamelist */
        gamelist?: (string[]|null);
    }

    /** Represents a GS2CLoginSucc. */
    class GS2CLoginSucc implements IGS2CLoginSucc {

        /**
         * Constructs a new GS2CLoginSucc.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGS2CLoginSucc);

        /** GS2CLoginSucc pid. */
        public pid: number;

        /** GS2CLoginSucc sName. */
        public sName: string;

        /** GS2CLoginSucc sGameFlag. */
        public sGameFlag: string;

        /** GS2CLoginSucc gamelist. */
        public gamelist: string[];

        /**
         * Creates a new GS2CLoginSucc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GS2CLoginSucc instance
         */
        public static create(properties?: login.IGS2CLoginSucc): login.GS2CLoginSucc;

        /**
         * Encodes the specified GS2CLoginSucc message. Does not implicitly {@link login.GS2CLoginSucc.verify|verify} messages.
         * @param message GS2CLoginSucc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGS2CLoginSucc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GS2CLoginSucc message, length delimited. Does not implicitly {@link login.GS2CLoginSucc.verify|verify} messages.
         * @param message GS2CLoginSucc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGS2CLoginSucc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GS2CLoginSucc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GS2CLoginSucc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GS2CLoginSucc;

        /**
         * Decodes a GS2CLoginSucc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GS2CLoginSucc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GS2CLoginSucc;

        /**
         * Verifies a GS2CLoginSucc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GS2CLoginSucc message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GS2CLoginSucc
         */
        public static fromObject(object: { [k: string]: any }): login.GS2CLoginSucc;

        /**
         * Creates a plain object from a GS2CLoginSucc message. Also converts values to other types if specified.
         * @param message GS2CLoginSucc
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GS2CLoginSucc, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GS2CLoginSucc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2GSVertify. */
    interface IC2GSVertify {

        /** C2GSVertify sToken */
        sToken: string;

        /** C2GSVertify sGameFlag */
        sGameFlag: string;
    }

    /** Represents a C2GSVertify. */
    class C2GSVertify implements IC2GSVertify {

        /**
         * Constructs a new C2GSVertify.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IC2GSVertify);

        /** C2GSVertify sToken. */
        public sToken: string;

        /** C2GSVertify sGameFlag. */
        public sGameFlag: string;

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
