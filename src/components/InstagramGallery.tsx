import React from 'react';
import InstagramEmbed from './InstagramEmbed';
import { Button } from './ui/button';

const InstagramGallery: React.FC = () => {
  const instagramPosts = [
    "https://www.instagram.com/p/ChU4R5xo6gk/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/tv/CfB785fjJz2/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/Ch14kskIhrN/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/CfTgyaGtFX3/?utm_source=ig_embed&utm_campaign=loading"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Посмотрите на качество наших работ в Instagram @rusan.by
          </h2>
        </div>
        
        {/* Instagram Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8 items-start">
          {instagramPosts.map((permalink, index) => (
            <div key={index} className="flex justify-center items-start h-full">
              <InstagramEmbed permalink={permalink} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => window.open('https://www.instagram.com/rusan.by/', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Посетить наш Instagram @rusan.by
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
