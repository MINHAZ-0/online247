$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
                {
            name: ' ',
            poster: 'img/tsports.png',
            thumbnail: 'img/tsports.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempinfobase.jagobd.com:444/cZVydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZT00U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/titash.stream/chunks.m3u8', type: 'application/x-mpegURL'},
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
        /*
        {
            name: ' ',
            poster: 'https://minhaz-0.github.io/img/tsports.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/tsports.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/titash.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },  
     
       {
            name: 'EKATTOR TV',
            poster: 'https://minhaz-0.github.io/img/ekattortv.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/ekattortv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.136.200.246:8082/Ekattor-tv/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
       {
            name: 'STAR JALSHA HD',
            poster: 'https://minhaz-0.github.io/img/starjalshahd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/starjalshahd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.159.4.38:9191/CH24-INBD3/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
               {
            name: 'COLORS BANGLA HD',
            poster: 'https://minhaz-0.github.io/img/colorsbanglahd.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/colorsbanglahd.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.159.4.38:9191/CH25-INBD4/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
               {
            name: 'SONY TEN 1 HD',
            poster: 'https://minhaz-0.github.io/img/sonyten1.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/sonyten1.jpg',
            autoplay: 'true',
            sources: [
                {src: 'http://103.205.132.165:8800/hls/stream1.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
               {
            name: ' ',
            poster: 'img/gtv.png',
            thumbnail: 'img/gtv.png',
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
            poster: 'img/natgeo.png',
            thumbnail: 'img/natgeo.png',
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
            poster: 'img/zeebanglahd.png',
            thumbnail: 'img/zeebanglahd.png',
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
            poster: 'img/channeli.png',
            thumbnail: 'img/channeli.png',
            autoplay: 'true',
            sources: [
                {src:'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/channeli-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/jamunatv.png',
            thumbnail: 'img/jamunatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/jamuna-test-sample-ok.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/atnbangla.png',
            thumbnail: 'img/atnbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/atnbd-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        /*
	{
            name: ' ',
            poster: 'img/ekattortv.png',
            thumbnail: 'img/ekattortv.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.159.4.38:9191/BD-BANGLA-7/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	{
            name: ' ',
            poster: 'img/news24.png',
            thumbnail: 'img/news24.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/news24local.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/dbcnews.png',
            thumbnail: 'img/dbcnews.png',
            autoplay: 'true',
            sources: [
                {src:'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/dbcnews.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      		        {
            name: ' ',
            poster: 'img/rtv.png',
            thumbnail: 'https://minhaz-0.github.io/img/rtv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/rtv-sg.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
          		        {
            name: ' ',
            poster: 'img/9xm.png',
            thumbnail: 'img/9xm.png',
            autoplay: 'true',
            sources: [
                {src: 'https://m-c01-j2apps.s.llnwi.net/live_hd/0306.9XM.in.m3u8', type: 'application/x-mpegURL'},
            ]
        },
                		        {
            name: ' ',
            poster: 'img/sangeet-bangla.png',
            thumbnail: 'img/sangeet-bangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/sangeetbangla/sangeetbangla.isml/sangeetbangla-audio_208482_und=208000-video=877600.m3u8', type: 'application/x-mpegURL'},
            ]
        },
      {
            name: ' ',
            poster: 'img/9xjalwa.png',
            thumbnail: 'img/9xjalwa.png',
            autoplay: 'true',
            sources: [
                {src: 'https://m-c01-j2apps.s.llnwi.net/live/0781.9XJalwa.in_480p/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
            {
                  name: '',
            poster: 'img/showbox.png',
            thumbnail: 'img/showbox.png',
            autoplay: 'true',
            sources: [
                {src: 'https://epiconvh.s.llnwi.net/showbox/master.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
             {
            name: ' ',
            poster: 'img/mtv.png',
            thumbnail: 'img/mtv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS03/master.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        /*
                   {
                  name: ' ',
            poster: 'img/hungama.png',
            thumbnail: 'img/hungama.png',
            autoplay: 'true',
            sources: [
                {src: 'https://live.hungama.com/linear/dil-se/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */

		    {
            name: ' ',
            poster: 'img/somoytv.png',
            thumbnail: 'img/somoytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.jaagobd.com:444/somoy/somoyt000011226615544544.stream/live-orgin/somoyt000011226615544544.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },

				    {
            name: ' ',
            poster: 'img/independent.png',
            thumbnail: 'img/independent.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/independent-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
				    {
            name: ' ',
            poster: 'img/banglavision.png',
            thumbnail: 'img/banglavision.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/banglav000.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
				    {
            name: ' ',
            poster: 'img/btvworld.png',
            thumbnail: 'img/btvworld.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/btvbd-office-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
						    {
            name: ' ',
            poster: 'img/channel24.png',
            thumbnail: 'img/channel24.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/channel24-sg-e8e.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
						    {
            name: ' ',
            poster: 'img/doyeltv.png',
            thumbnail: 'img/doyeltv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/doyeltv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
						    {
            name: ' ',
            poster: 'img/voice.png',
            thumbnail: 'img/voice.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/voicetv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		
								    {
            name: ' ',
            poster: 'img/mytv.png',
            thumbnail: 'img/mytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/mytv-up-off.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		/*
		 {
            name: 'GANN BANGLA HD',
            poster: 'https://minhaz-0.github.io/img/gannbangla.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/gannbangla.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/gaanbangla-8-orgd.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	   
        {
            name: 'BANGLA TV HD',
            poster: 'https://minhaz-0.github.io/img/banglatv.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/banglatv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/banglatvhd.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    
        {
            name: 'DESH TV',
            poster: 'https://minhaz-0.github.io/img/deshtv.jpg',
            thumbnail: 'https://minhaz-0.github.io/img/deshtv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/deshtv.stream/live-orgin/deshtv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	
        {
            name: ' ',
            poster: 'img/mohonatv.png',
            thumbnail: 'img/mohonatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/mohonatv00000223232244556633.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    
        {
            name: ' ',
            poster: 'img/sonyaath.png',
            thumbnail: 'img/sonyaath.png',
            autoplay: 'true',
            sources: [
                {src: 'http://45.127.56.3:9698/live/Corpus-POL/SRV4/1/SONY-AATH/video.m3u8', type: 'application/x-mpegURL'},
            ]
        },

{
            name: ' ',
            poster: 'img/bijoytv.png',
            thumbnail: 'img/bijoytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempabs.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/bijoy00.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },

*/

        {
            name: ' ',
            poster: 'img/nrbbd.png',
            thumbnail: 'img/nrbbd.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempskyview.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/nrb-eu.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    /*
        {
            name: 'SRISTY',
            poster: 'img/Sristy.png',
            thumbnail: 'img/Sristy.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/sristytv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	*/
        {
            name: ' ',
            poster: 'img/nandan.png',
            thumbnail: 'img/nandan.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/nantv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
/*
        {
            name: ' ',
            poster: 'img/btv.png',
            thumbnail: 'img/btv.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.106.2.149:13456/sangsad.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
        {
            name: ' ',
            poster: 'img/deshvi.png',
            thumbnail: 'img/deshvi.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempskyview.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/deshebideshe.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    /*
        {
            name: 'BTV CTG',
            poster: '/img/cgtn.jpg',
            thumbnail: '/img/cgtn.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://liveprodeuwest.akamaized.net/eu1/Channel-EUTVqvs-AWS-ireland-1/Source-EUTVqvs-1000-1_live.m3u8', type: 'application/x-mpegURL'},
            ]
        }, 
	    
   {
            name: ' ',
            poster: 'img/channeli.png',
            thumbnail: 'img/channeli.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/channeli-8-org.stream/lplaylist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/jamunatv.png',
            thumbnail: 'img/jamunatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/jamuna-test-sample-ok.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/atnbangla.png',
            thumbnail: 'img/atnbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/atnbd-8-org.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/ekattortv.png',
            thumbnail: 'img/ekattortv.png',
            autoplay: 'true',
            sources: [
                {src: 'http://103.159.4.38:9191/BD-BANGLA-7/tracks-v1a1/mono.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/news24.png',
            thumbnail: 'img/news24.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/news24local.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	{
            name: ' ',
            poster: 'img/timetv.png',
            thumbnail: 'img/timetv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://egress-1.do-ny-3.ttv.dotworldcorp.com/hls/ttv/index.m3u8?', type: 'application/x-mpegURL'},
            ]
        },
        
	{
            name: ' ',
            poster: 'img/satv.png',
            thumbnail: 'img/satv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/satvoff5666.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/ekusheytv.png',
            thumbnail: 'img/ekusheytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://ekusheyserver.com/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/banglatv.png',
            thumbnail: 'img/banglatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/banglatvhd.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/bijoytv.png',
            thumbnail: 'img/bijoytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/bijoy00.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: ' ',
            poster: 'img/boishakhitv.png',
            thumbnail: 'img/boishakhitv.png',
            autoplay: 'true',
            sources: [
               {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/boishakhitv-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: ' ',
            poster: 'img/Channel9.png',
            thumbnail: 'img/Channel9.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/channel9hd.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: ' ',
            poster: 'img/maasranga.png',
            thumbnail: 'img/maasranga.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/mass.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    /*
	{
            name: '',
            poster: 'img/independent.png',
            thumbnail: 'img/independent.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/independent-8-org.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/somoytv.png',
            thumbnail: 'img/somoytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.jaagobd.com:444/somoy/somoyt000011226615544544.stream/live-orgin/somoyt000011226615544544.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: ' ',
            poster: 'img/independent.png',
            thumbnail: 'img/independent.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/independent-8-org.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/banglavision.png',
            thumbnail: 'img/banglavision.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/banglav000.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/somoytv.png',
            thumbnail: 'img/somoytv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/somoyt000011226615544544.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/btv.png',
            thumbnail: 'img/btv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/btvbd-office-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	{
            name: ' ',
            poster: 'img/magicbangla.png',
            thumbnail: 'img/magicbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/magicbanglatv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
	{
            name: ' ',
            poster: 'img/jagonews24.png',
            thumbnail: 'img/jagonews24.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/jagonews24.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
	{
            name: ' ',
            poster: 'img/bangla21.png',
            thumbnail: 'img/bangla21.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/bangla21tv000889956-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        /*
	{
            name: ' ',
            poster: 'img/gannbangla.png',
            thumbnail: 'img/gannbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/gaanbangla-8-orgd.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	{
            name: ' ',
            poster: 'img/deeptotv.png',
            thumbnail: 'img/deeptotv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/deeptotv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/atnnews.png',
            thumbnail: 'img/atnnews.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/atnws-sg.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    
	{
            name: ' ',
            poster: 'img/cnnbangla.png',
            thumbnail: 'img/cnnbangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/canbanglatv.stream/chunks.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: ' ',
            poster: 'img/anandatv.png',
            thumbnail: 'img/anandatv.png',
            autoplay: 'true',
            sources: [
                {src: 'https://tempx.jagobd.com:444/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/anandatv.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	    /*
	{
            name: ' ',
            poster: 'img/deshtv.jpg',
            thumbnail: 'img/deshtv.jpg',
            autoplay: 'true',
            sources: [
                {src: 'https://somoy.appv.jagobd.com:444/somoy/deshtv.stream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        */
	{
            name: ' ',
            poster: 'img/atn.png',
            thumbnail: 'img/atn.png',
            autoplay: 'true',
            sources: [
                {src: 'https://d10rltuy0iweup.cloudfront.net/ATNNAT/myStream/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	
	{
            name: ' ',
            poster: 'img/madani.png',
            thumbnail: 'img/madani.png',
            autoplay: 'true',
            sources: [
                {src: 'https://madnitv.vdn.dstreamone.net/madnitvbangla/madnibanglaabr/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },

{
            name: ' ',
            poster: 'img/iqrabangla.png',
            thumbnail: 'img/iqrabangla.png',
            autoplay: 'true',
            sources: [
                {src: 'https://ap02.iqplay.tv:8082/iqb8002/iq53la/playlist.m3u8', type: 'application/x-mpegURL'},
            ]
        },

]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});