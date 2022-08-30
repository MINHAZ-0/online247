$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
                {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/tsports.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/tsports.png',
            autoplay: 'true',
            sources: [
                {src: 'https://51.smartcric.eu/mobile/stream2_320p/playlist.m3u8?vidictid=192341070411&id=7&pk=2baba6ed29d3a03c6781ae2dfcd0120ca150dc9b608f27120b43fde7a3d63d43', type: 'application/x-mpegURL'},
            ]
        },
                {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/tsports.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/tsports.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tv.kotha.im/TSports_HD/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },

        {
        name: ' ',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjZWIaGSgCgjSXL__MwvIu3bmePAQqy1xOw&usqp=CAU',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjZWIaGSgCgjSXL__MwvIu3bmePAQqy1xOw&usqp=CAU',
        autoplay: 'true',
        sources: [
        {src: 'https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/chunklist_b1800000_t64NzIwcA==.m3u8', type: 'application/x-mpegURL'},
        ]
        }, 
        {
            name: 'GAZI TV HD',
            poster: 'https://minhaz-0.github.io/img/gtv.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/gtv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://live.tvdhaka.com:30443/Channel-1/tracks-v1a1/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },  
     
       {
            name: 'EKATTOR TV HD',
            poster: 'https://minhaz-0.github.io/img/ekattortv.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/ekattortv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://tv.kotha.im/Ekattor_TV_HD/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
/*
       {
            name: 'STAR JALSHA HD',
            poster: 'https://minhaz-0.github.io/img/starjalshahd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/starjalshahd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.109.56.116/live/skyfeed1003/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
               
               {
            name: 'ZEE BANGLA HD',
            poster: 'https://minhaz-0.github.io/img/zeebanglahd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/zeebanglahd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.109.56.116/live/skyfeed1004/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
 {
            name: 'COLORS BANGLA HD',
            poster: 'https://minhaz-0.github.io/img/colorsbanglahd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/colorsbanglahd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://208.86.19.13:81/904.stream/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
               {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/gtv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/gtv.png',
            autoplay: 'true',
            sources: [
                {src: '', type: 'application/x-mpegURL'},
            ]
        },

      
        
          {
            name: 'ZEE BANGLA HD',
            poster: 'https://minhaz-0.github.io/img/zeebanglahd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/zeebanglahd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.205.132.165:8800/hls/stream2.m3u8', type: 'application/x-mpegURL'},
            ]
        },
       
	             {
            name: 'STAR SPORTS 1 HD',
            poster: 'https://minhaz-0.github.io/img/starsports1hd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/starsports1hd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.205.132.165:8800/hls/stream3.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		          {
            name: 'BTV NATIONAL',
            poster: 'https://minhaz-0.github.io/img/btv.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/btv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.205.132.165:8800/hls/stream4.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		      
     
             {
            name: 'Bein Premium ',
            poster: 'https://minhaz-0.github.io/img/Bein.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/Bein.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://217.74.16.155:8082/local/ar-s/B-S-pre-1-stop/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'SONY TEN 1 HD',
            poster: 'https://minhaz-0.github.io/img/sonyten1.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/songten1.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.60.172.106:8080/SonyTen1/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },  
		       		{
            name: 'SONY TEN 2 HD',
            poster: 'https://minhaz-0.github.io/img/sonyten2.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/sonyten2.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.60.172.106:8080/SonyTen2/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },  
		       		{
            name: 'SONY TEN 3 HD',
            poster: 'https://minhaz-0.github.io/img/sonyten3.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/sonyten3.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.60.172.106:8080/SonyTen3/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },  
             {
            name: ' ',
            poster: 'img/ekattortv.png',
            thumbnail: 'img/ekattortv.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.60.172.106:8080/Ekattor-tv/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },  
            
      			       		{
            name: 'ENTER 10 BANGLA',
            poster: 'https://minhaz-0.github.io/img/enter10bangla.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/enter10bangla.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://itvoign.multitvsolution.com/idvo/enterr10bangla_540p/index.m3u8', type: 'application/x-mpegURL'},
            ]
        }, 
      
                                   	  {
            name: ' SONY TV HD',
            poster: 'https://minhaz-0.github.io/img/sonytvhd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/sonytvhd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.60.172.106:8080/SonyTVHD/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      
   
            {
            name: ' ',
            poster: 'img/starsports.png',
            thumbnail: 'img/starsports.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.60.172.106:8080/StarSportsSelect2/tracks-v1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      
             {
            name: 'National Geographic',
            poster: 'https://minhaz-0.github.io/img/natgeo.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/natgeo.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://iptv.prosto.tv:7000/ch83/video.m3u8', type: 'application/x-mpegURL'},
            ]
        },
            {
            name: 'NICK',
            poster: 'https://minhaz-0.github.io/img/nick.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/nick.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://iptv.prosto.tv:7000/ch71/video.m3u8', type: 'application/x-mpegURL'},
            ]
        },
             {
            name: 'CARTOON NETWORK',
            poster: 'http://103.167.190.250/img/cn.png',
            thumbnail: 'http://103.167.190.250/img/cn.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.167.190.250/hls/cn.m3u8', type: 'application/x-mpegURL'},
            ]
        },
            {
            
            name: 'POGO',
            poster: 'https://minhaz-0.github.io/img/pogo.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/pogo.jpg',
            autoplay: 'true',
            sources: [
                {src: ' http://103.167.190.250/hls/pogo.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      
                                          {
            name: 'STAR MOVIES',
            poster: 'http://103.167.190.250/img/starmovies.jpg',
            thumbnail: 'http://103.167.190.250/img/starmovies.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.167.190.250/hls/starmovies.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      
                                          {
            name: 'ANIMAL PLANENT',
            poster: 'https://minhaz-0.github.io/img/animalplanent.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/animalplanent.jpg',
            autoplay: 'true',
            sources: [
                {src: ' http://103.167.190.250/hls/animalplanent.m3u8', type: 'application/x-mpegURL'},
            ]
        },
                                          {
            name: ' ',
            poster: 'https://minhaz-0.github.io/img/sonymaxhd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/sonymaxhd.jpg',
            autoplay: 'true',
            sources: [
                {src: ' http://103.55.144.46/hls/sonymaxhd.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      

      
                               {
            name: ' ',
            poster: 'https://minhaz-0.github.io/img/discovery.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/discovery.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.167.190.250/hls/discovery.m3u8', type: 'application/x-mpegURL'},
            ]
        },
                 {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/natgeo.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/natgeo.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.167.190.250/hls/ngohd.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	
      
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/img/jalshamovies.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/jalshamovies.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.55.144.46/hls/jalshamovies.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
      	{
            name: 'STAR JALSHA HD',
            poster: 'https://minhaz-0.github.io/img/starjalsha.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/starjalsha.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.55.144.46/hls/starjalsha.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	

        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/zeebanglahd.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/zeebanglahd.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.55.144.46/hls/zeebangla.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	 {
            name: 'SONY AATH',
            poster: 'https://minhaz-0.github.io/img/sonyaath.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/sonyaath.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://45.127.56.3:9698/live/Corpus-POL/SRV4/1/SONY-AATH/video.m3u8', type: 'application/x-mpegURL'},
            ]
        },

              {
            name: 'ZEE CINEMA HD',
            poster: 'https://minhaz-0.github.io/img/zeecinemahd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/zeecinemahd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://208.115.215.42/ZEE_CInema_HD/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
                    {
            name: 'COLORS BANGLA HD',
            poster: 'https://minhaz-0.github.io/img/colorsbangla.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/colorsbangla.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.55.144.46/hls/colorsbangla.m3u8', type: 'application/x-mpegURL'},
            ]
        },
               {
            name: 'STAR GOLD 2',
            poster: 'http://103.167.190.250/img/stargold2hd.png',
            thumbnail: 'http://103.167.190.250/img/stargold2hd.png',
            autoplay: 'true',
            sources: [
                {src: 'http://144.217.70.181:9587/hin2/STARGOLD2/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
                     {
            name: 'STAR GOLD',
            poster: 'https://minhaz-0.github.io/img/stargold.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/stargold.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://144.217.70.181:9587/hin2/STARGOLDHD/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },

*/
      
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/channeli.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/channeli.png',
            autoplay: 'true',
            sources: [
                {src:'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/channeli-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/jamunatv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/jamunatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/jamuna-test-sample-ok.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/atnbangla.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/atnbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/atnbd-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
	
        
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/news24.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/news24.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/news24local.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/dbcnews.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/dbcnews.png',
            autoplay: 'true',
            sources: [
                {src:'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/dbcnews.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      		        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/rtv.png',
            thumbnail: 'https://minhaz-0.github.io/img/rtv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/rtv-sg.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
          		        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/9xm.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/9xm.png',
            autoplay: 'true',
            sources: [
                {src: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/9XM-audio_208482_und=208000-video=877600.m3u8?token=soheliptv01826655778', type: 'application/x-mpegURL'},
            ]
        },
                		        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/sangeet-bangla.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/sangeet-bangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/sangeetbangla/sangeetbangla.isml/sangeetbangla-audio_208482_und=208000-video=877600.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/9xjalwa.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/9xjalwa.png',
            autoplay: 'true',
            sources: [
                {src: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XJalwa/9XJalwa/.isml/9XJalwa-audio_208482_und=208000-video=877600.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
            {
                  name: '',
            poster: 'https://minhaz-0.github.io/online247/img/showbox.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/showbox.png',
            autoplay: 'true',
            sources: [
                {src: 'https://epiconvh.s.llnwi.net/showbox/master.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
             {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/mtv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/mtv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS03/master.m3u8', type: 'application/x-mpegURL'},
            ]
        },
    

		    {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/somoytv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/somoytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.jaagobd.com:444/somoy/somoyt000011226615544544.stream/live-orgin/somoyt000011226615544544.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },

				    {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/independent.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/independent.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/independent-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
				    {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/banglavision.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/banglavision.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/banglav000.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
				    {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/btvworld.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/btvworld.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/btvbd-office-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
						    {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/channel24.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/channel24.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/channel24-sg-e8e.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
		  {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/doyeltv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/doyeltv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/doyeltv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
						    {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/voice.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/voice.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/voicetv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
								    {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/mytv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/mytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/mytv-up-off.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/mohonatv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/mohonatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/mohonatv00000223232244556633.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    /*
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/sonyaath.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/sonyaath.png',
            autoplay: 'true',
            sources: [
                {src: 'http://45.127.56.3:9698/live/Corpus-POL/SRV4/1/SONY-AATH/video.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		*/


        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/nrbbd.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/nrbbd.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempskyview.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/nrb-eu.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    /*
        {
            name: 'SRISTY',
            poster: 'https://minhaz-0.github.io/online247/img/Sristy.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/Sristy.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/sristytv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/nandan.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/nandan.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/nantv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/deshvi.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/deshvi.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempskyview.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/deshebideshe.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/timetv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/timetv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://egress-1.do-ny-3.ttv.dotworldcorp.com/hls/ttv/index.m3u8?', type: 'application/x-mpegURL'},
            ]
        },
        
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/satv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/satv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/satvoff5666.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/ekusheytv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/ekusheytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://ekusheyserver.com/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/banglatv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/banglatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/banglatvhd.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/bijoytv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/bijoytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/bijoy00.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/boishakhitv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/boishakhitv.png',
            autoplay: 'true',
            sources: [
               {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/boishakhitv-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/channel9.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/channel9.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/channel9hd.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/maasranga.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/maasranga.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/mass.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	  /*
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/btv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/btv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/btvbd-office-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
        {
        name: ' ',
        poster: 'https://minhaz-0.github,io/online247/img/roaltv.png',
        thumbnail: 'https://minhaz-0.github.io/online247/img/roaltv.png',
        autoplay: 'true',
        sources: [
        {src: 'https://tempskyview.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/royaltv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
        ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/magicbangla.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/magicbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/magicbanglatv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/jagonews24.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/jagonews24.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/jagonews24.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/bangla21.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/bangla21.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/bangla21tv000889956-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        /*
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/gannbangla.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/gannbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/gaanbangla-8-orgd.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/deeptotv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/deeptotv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/deeptotv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/atnnews.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/atnnews.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/atnws-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/cnnbangla.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/cnnbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/canbanglatv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/anandatv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/anandatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/anandatv.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    /*
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/deshtv.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/deshtv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/deshtv.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/atn.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/atn.png',
            autoplay: 'true',
            sources: [
                {src: 'https://d10rltuy0iweup.cloudfront.net/ATNNAT/myStream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	
	{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/madani.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/madani.png',
            autoplay: 'true',
            sources: [
                {src: 'https://madnitv.vdn.dstreamone.net/madnitvbangla/madnibanglaabr/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },

{
            name: ' ',
            poster: 'https://minhaz-0.github.io/online247/img/iqrabangla.png',
            thumbnail: 'https://minhaz-0.github.io/online247/img/iqrabangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://ap02.iqplay.tv:8082/iqb8002/iq53la/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },

]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
