export declare class MockSSEResponse {
    private dataArray;
    private delay;
    private controller;
    private encoder;
    private stream;
    constructor(dataArray: string[], delay?: number);
    private pushData;
    getResponse(): Response;
}
