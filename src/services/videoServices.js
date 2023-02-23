import * as videoRequest from '~/utils/requestVideo';

export const list = async () => {
    try {
        const res = await videoRequest.get('feed/list', {
            params: { region: 'VN', count: '10' },
            headers: {
                'X-RapidAPI-Key': '666414bd22mshaedf31b6d16f6f5p10dbfajsn4efe69494860',
                'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
