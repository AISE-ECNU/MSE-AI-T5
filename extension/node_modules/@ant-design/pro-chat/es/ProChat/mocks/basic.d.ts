export declare const example: {
    chats: ({
        content: string;
        createAt: number;
        id: string;
        role: string;
        updateAt: number;
        extra: {
            test: string;
        };
        parentId?: undefined;
        model?: undefined;
    } | {
        content: string;
        createAt: number;
        id: string;
        parentId: string;
        role: string;
        updateAt: number;
        model: string;
        extra?: undefined;
    })[];
    config: {
        model: string;
        params: {
            frequency_penalty: number;
            presence_penalty: number;
            temperature: number;
            top_p: number;
        };
        systemRole: string;
    };
};
