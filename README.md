# LyricFusion

Welcome to LyricFusion, where the world of music meets your fingertips! 🎵📱

LyricFusion is a dynamic and innovative music streaming platform that brings you a seamless blend of melodies, rhythms, and lyrics, all within the convenience of your fingertips. With a user-friendly interface and an extensive library of tracks, LyricFusion is designed to enhance your music listening experience and cater to your musical cravings.

## Get Started

To get started with LyricFusion, simply clone this repository and follow the setup instructions in the provided documentation. Whether you're a developer looking to contribute or a music enthusiast ready to dive into a world of melodies, LyricFusion has a place for you.

Join us in shaping the future of music streaming. Let the melodies fuse with your fingertips, only with LyricFusion.

## Documentation

### Installation

1. Clone the repo
   ```sh
   git Clone https://github.com/20pa5a1210/LyricFusion.git
   ```
2. Install NPM packages
   ```sh
    npm install
   ```
3. Setup .env file

   ```
   NEXT_PUBLIC_SUPABASE_URL=your supabase url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your supabase anon key
   SUPABASE_SERVICE_ROLE_KEY=your supabase service role key
   ```
4. Apply migrations

   ```sh
    create a new table in supabase called "songs"
    create a new table in supabase called "liked_songs"
    refer to file type_db.ts for the schema of the tables
   ```


5. Run the app

   ```sh
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Distributed under the MIT License. See `LICENSE` for more information.

