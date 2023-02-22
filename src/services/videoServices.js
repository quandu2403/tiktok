import * as videoRequest from '~/utils/requestVideo';

export const list = async () => {
    try {
        const res = await videoRequest.get('feed/list', {
            params: { region: 'VN', count: '10' },
            headers: {
                'X-RapidAPI-Key': 'd32d257a9bmsh76846eaa310c232p172d61jsn31571c305907',
                'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
