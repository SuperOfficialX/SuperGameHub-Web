const menuToggle = document.querySelector(".menu-toggle"); 
const navLinks = document.querySelector(".nav-links"); 
const navItems = document.querySelectorAll(".nav-links a"); 
const sections = document.querySelectorAll("main section[id]"); 
 
const documentButtons = 
    document.querySelectorAll(".document-button"); 
 
const blogButtons = 
    document.querySelectorAll(".blog-read-more"); 
 
const toast = 
    document.querySelector(".site-toast"); 
 
const blogModal = 
    document.querySelector("#blog-modal"); 
 
const blogModalClose = 
    document.querySelector("#blog-modal-close"); 
 
const blogModalTitle = 
    document.querySelector("#blog-modal-title"); 
 
const blogModalCategory = 
    document.querySelector("#blog-modal-category"); 
 
const blogModalDate = 
    document.querySelector("#blog-modal-date"); 
 
const blogModalBody = 
    document.querySelector("#blog-modal-body"); 
 
let toastTimeout; 
 
 
/* ========================= 
   MOBILE NAVIGATION 
========================= */ 
 
function openMenu() { 
 
    if (!navLinks || !menuToggle) { 
        return; 
    } 
 
    navLinks.classList.add("active"); 
 
    menuToggle.setAttribute( 
        "aria-expanded", 
        "true" 
    ); 
 
    menuToggle.setAttribute( 
        "aria-label", 
        "Close navigation menu" 
    ); 
} 
 
 
function closeMenu() { 
 
    if (!navLinks || !menuToggle) { 
        return; 
    } 
 
    navLinks.classList.remove("active"); 
 
    menuToggle.setAttribute( 
        "aria-expanded", 
        "false" 
    ); 
 
    menuToggle.setAttribute( 
        "aria-label", 
        "Open navigation menu" 
    ); 
} 
 
 
if (menuToggle) { 
 
    menuToggle.addEventListener( 
        "click", 
        () => { 
 
            const isOpen = 
                navLinks && 
                navLinks.classList.contains( 
                    "active" 
                ); 
 
            if (isOpen) { 
                closeMenu(); 
            } else { 
                openMenu(); 
            } 
 
        } 
    ); 
 
} 
 
 
/* ========================= 
   CLOSE MENU ON NAV CLICK 
========================= */ 
 
navItems.forEach((link) => { 
 
    link.addEventListener( 
        "click", 
        () => { 
            closeMenu(); 
        } 
    ); 
 
}); 
 
 
/* ========================= 
   TOAST 
========================= */ 
 
function showToast(message) { 
 
    if (!toast) { 
        return; 
    } 
 
    toast.textContent = 
        message; 
 
    toast.classList.add( 
        "show" 
    ); 
 
    clearTimeout( 
        toastTimeout 
    ); 
 
    toastTimeout = 
        setTimeout( 
            () => { 
 
                toast.classList.remove( 
                    "show" 
                ); 
 
            }, 
            3000 
        ); 
} 
 
 
/* ========================= 
   ACTIVE NAVIGATION 
========================= */ 
 
if ("IntersectionObserver" in window) { 
 
    const sectionObserver = 
        new IntersectionObserver( 
            (entries) => { 
 
                entries.forEach( 
                    (entry) => { 
 
                        if ( 
                            !entry.isIntersecting 
                        ) { 
                            return; 
                        } 
 
                        const currentId = 
                            entry.target.id; 
 
                        navItems.forEach( 
                            (link) => { 
 
                                const isCurrent = 
                                    link.getAttribute( 
                                        "href" 
                                    ) === 
                                    `#${currentId}`; 
 
                                link.classList.toggle( 
                                    "active", 
                                    isCurrent 
                                ); 
 
                            } 
                        ); 
 
                    } 
                ); 
 
            }, 
            { 
                root: null, 
                threshold: 0.35 
            } 
        ); 
 
 
    sections.forEach( 
        (section) => { 
 
            sectionObserver.observe( 
                section 
            ); 
 
        } 
    ); 
} 
 
 
/* ========================= 
   BLOG POSTS 
========================= */ 
 
const blogPosts = { 
 
    "our-story": { 
 
        category: "OUR STORY", 
 
        date: "SEPT 2026", 
 
        title: 
            "Our Story — The Beginning of Super Game Hub", 
 
        body: ` 
 
            <p> 
                Super Game Hub did not begin as a large studio, 
                a big development team or a carefully planned 
                organization. It started with Super simply 
                discovering Roblox as a player and becoming curious 
                about what could be built on the platform. 
            </p> 
 
 
            <p> 
                This is the story of that journey — from the first 
                days of Roblox, to the first attempts at getting 
                Robux, to the creation of the first Super Game Hub 
                project, the lessons learned through development, 
                the players and people who became part of the journey, 
                the setbacks that came along the way, and the newer 
                projects that followed. 
            </p> 
 
 
            <h3> 
                Where It Started 
            </h3> 
 
 
            <p> 
                The journey started on August 14, 2025. 
            </p> 
 
 
            <p> 
                Before that, game development was not really the focus. 
                Super discovered Roblox as a player after watching a 
                Techno Gamerz Roblox Squid Game video. 
            </p> 
 
 
            <p> 
                At the time, Super used the Roblox username 
                <strong>notsuper729</strong>. 
            </p> 
 
 
            <p> 
                In the beginning, the goal was simple: play games, 
                explore Roblox and have fun. 
            </p> 
 
 
            <p> 
                There was no development plan, no studio concept and 
                no Super Game Hub identity yet. Super was simply a 
                player discovering a new gaming platform and everything 
                it had to offer. 
            </p> 
 
 
            <p> 
                But as Super spent more time on Roblox, that began to 
                change. 
            </p> 
 
 
            <h3> 
                The PLS DONATE Phase 
            </h3> 
 
 
            <p> 
                One of the early goals was getting enough Robux for 
                an avatar and gamepasses. 
            </p> 
 
 
            <p> 
                At the time, Indian UPI support was not available for 
                Roblox purchases, and Robux also felt expensive. 
                So instead of simply buying Robux, Super started 
                spending time in PLS DONATE trying to earn donations. 
            </p> 
 
 
            <p> 
                Many donation requests failed. There was a lot of 
                waiting, disappointment and frustration. 
            </p> 
 
 
            <p> 
                Then one player donated <strong>110 Robux</strong>. 
            </p> 
 
 
            <p> 
                Roblox took its 40% tax, but the donation still became 
                an important early moment. Some of those Robux were 
                used to get a <strong>40-Robux avatar</strong>. 
            </p> 
 
 
            <p> 
                At that point, Super was still mainly thinking like 
                a player. 
            </p> 
 
 
            <p> 
                But one idea was about to change everything. 
            </p> 
 
 
            <h3> 
                The Idea to Make a Game 
            </h3> 
 
 
            <p> 
                While playing Troll Tower, Super saw how many players 
                could gather inside a Roblox experience. 
            </p> 
 
 
            <p> 
                That created a simple thought: 
                what if Super could make a game of his own and attract 
                players to it? 
            </p> 
 
 
            <p> 
                It was not a professional game-development plan. 
                Super was completely new to development. 
                It was simply curiosity — the idea of trying to make 
                something rather than only playing what other people 
                had created. 
            </p> 
 
 
            <p> 
                On September 13, 2025, that idea became real. 
            </p> 
 
 
            <div class="story-divider"></div> 
 
 
            <h3> 
                LAZER OBBY BY SUPER — The First Project 
            </h3> 
 
 
            <p> 
                <strong>LAZER OBBY BY SUPER</strong> was created on 
                September 13, 2025. 
            </p> 
 
 
            <p> 
                It was the first Super Game Hub project. 
            </p> 
 
 
            <p> 
                Super was completely new to game development when the 
                project started. The first version was extremely basic: 
                a single floor with block-like laser models inserted 
                from the Roblox Toolbox. 
            </p> 
 
 
            <p> 
                The game was simple, easy and honestly quite boring 
                compared with what it would eventually become. 
            </p> 
 
 
            <p> 
                Super added a Win Area with a simple “U Win” type 
                model and continued experimenting with the project. 
            </p> 
 
 
            <p> 
                There was no instant jump from beginner to experienced 
                developer. Instead, Super learned by building, 
                testing, changing things, making mistakes and trying 
                again. 
            </p> 
 
 
            <p> 
                Little by little, LAZER OBBY BY SUPER moved from a 
                very basic beginner project toward a more developed 
                obby. Every update became another opportunity to learn. 
            </p> 
 
 
            <p> 
                Some Roblox friends teased or trolled the early game, 
                but Super kept updating it. 
            </p> 
 
 
            <h3> 
                Saturday Events 
            </h3> 
 
 
            <p> 
                One of the most memorable features of LAZER OBBY 
                BY SUPER became its Saturday admin-abuse events. 
            </p> 
 
 
            <p> 
                The events originally happened at <strong>2 PM every 
                Saturday</strong>. 
            </p> 
 
 
            <p> 
                In the beginning, attendance was extremely low. 
                Sometimes only one friend would join. 
            </p> 
 
 
            <p> 
                Eventually, friends and friends-of-friends started 
                joining. Normal player counts could still be zero, 
                but special events could bring around 7 to 10 players 
                together. 
            </p> 
 
 
            <p> 
                The first admin-abuse event happened around the 
                Chhath Puja festival period. 
            </p> 
 
 
            <p> 
                Later, the event time changed from 2 PM to 
                <strong>4 PM</strong>. 
            </p> 
 
 
            <p> 
                These events were important because the game was no 
                longer just something sitting inside Roblox Studio. 
                Actual players were showing up, playing together and 
                creating memories inside something Super had built. 
            </p> 
 
 
            <h3> 
                The Christmas Update Incident 
            </h3> 
 
 
            <p> 
                One of the biggest development scares happened during 
                a Christmas update. 
            </p> 
 
 
            <p> 
                A team member named 
                <strong>Blackspot6789</strong> helped during the 
                Christmas update and development. 
            </p> 
 
 
            <p> 
                To save scripting time, a limited-time weapon was 
                inserted from the Roblox Toolbox. 
            </p> 
 
 
            <p> 
                The weapon contained effects that were not understood 
                at the time. It included a skeleton-monster effect and 
                a black-hole effect when players were eliminated. 
            </p> 
 
 
            <p> 
                On launch day, around 5 to 7 players joined initially, 
                eventually reaching around 10 players. 
            </p> 
 
 
            <p> 
                Everyone received the sword and started fighting. 
                Skeletons appeared and the unusual effects began 
                affecting players. 
            </p> 
 
 
            <p> 
                From the players' perspective, the game looked like 
                it had been hacked. 
            </p> 
 
 
            <p> 
                Super panicked and made the game private. 
                Roblox Studio was opened on the PC and anti-exploit 
                scripts were prepared while trying to understand 
                what was happening. 
            </p> 
 
 
            <p> 
                Nothing seemed to fix the problem at first. 
            </p> 
 
 
            <p> 
                Later, while checking the game on mobile, Super noticed 
                a small skeleton icon on the sword. 
            </p> 
 
 
            <p> 
                Clicking the icon reproduced the strange effects. 
            </p> 
 
 
            <p> 
                The mystery was finally solved. 
            </p> 
 
 
            <p> 
                There was no hacker behind the incident. The effects 
                were part of the weapon that had been inserted from 
                the Toolbox. 
            </p> 
 
 
            <p> 
                The sword was removed and the map was eventually 
                changed from its Christmas snow theme back to the 
                normal version. 
            </p> 
 
 
            <p> 
                Blackspot6789 had helped during the Christmas update, 
                but after that update he lost interest in development 
                and stopped working with the development side. 
                He is now simply a normal player rather than 
                development staff. 
            </p> 
 
 
            <h3> 
                An Unexpected Co-Owner 
            </h3> 
 
 
            <p> 
                During December, another unexpected moment came from 
                PLS DONATE. 
            </p> 
 
 
            <p> 
                A player who was repeatedly begging was asked to stop 
                or risk being blocked. 
            </p> 
 
 
            <p> 
                Another richer player reacted by telling Super to 
                be quiet. 
            </p> 
 
 
            <p> 
                Instead of letting the interaction end there, 
                Super invited the player to see the game and 
                discover what had actually been created. 
            </p> 
 
 
            <p> 
                The player's username was 
                <strong>Eku7857</strong>. 
            </p> 
 
 
            <p> 
                Eku7857 joined LAZER OBBY BY SUPER, was impressed by 
                the project and eventually became a co-owner. 
            </p> 
 
 
            <p> 
                It was one of the first signs that the project could 
                connect with people outside Super's original group 
                of friends. 
            </p> 
 
 
            <h3> 
                Trying to Build a Revenue System 
            </h3> 
 
 
            <p> 
                Super later added a shop and a coin or currency system 
                with the hope that the game could eventually generate 
                revenue. 
            </p> 
 
 
            <p> 
                That plan did not work. 
            </p> 
 
 
            <p> 
                There were moments when quitting felt like the easiest 
                choice. 
            </p> 
 
 
            <p> 
                But Super kept updating the game instead of giving up. 
            </p> 
 
 
            <h3> 
                The First Major Milestones 
            </h3> 
 
 
            <p> 
                LAZER OBBY BY SUPER continued to grow over time. 
            </p> 
 
 
            <p> 
                The project reached roughly 3,000 to 4,000 visits, 
                then 5,000, and eventually more than 10,000. 
            </p> 
 
 
            <p> 
                In the end, the game reached approximately 
                <strong>13,000 visits</strong>. 
            </p> 
 
 
            <p> 
                One of the most meaningful moments came with the first 
                1,000 visits. 
            </p> 
 
 
            <p> 
                A loyal admin named 
                <strong>alanpandey777</strong> celebrated the first 
                1,000 visits together with Super. 
            </p> 
 
 
            <p> 
                A video of that celebration still exists on the 
                DevSuperX YouTube channel. 
            </p> 
 
 
            <p> 
                Alan's Roblox account was later hacked, and the 
                connection was eventually lost. 
            </p> 
 
 
            <p> 
                Even so, Alan remains an important part of the early 
                history of the project as one of its loyal OG admins. 
            </p> 
 
 
            <h3> 
                The Eku7857 Chapter 
            </h3> 
 
 
            <p> 
                The relationship with Eku7857 later became much more 
                complicated. 
            </p> 
 
 
            <p> 
                Eku eventually became inactive and was not contributing 
                much to development while mainly asking Super for Robux. 
            </p> 
 
 
            <p> 
                Super warned him, and a larger argument eventually 
                happened. 
            </p> 
 
 
            <p> 
                Eku later judged and mocked Super from another player's 
                game. 
            </p> 
 
 
            <p> 
                Eku's friend had also created a game, showed it to Super 
                and criticized LAZER OBBY BY SUPER, calling it trash. 
            </p> 
 
 
            <p> 
                That person was suspended and banned from 
                LAZER OBBY BY SUPER. 
            </p> 
 
 
            <p> 
                Eku then banned Super from his friend's game. 
                There were also attempts to attract or pull 
                LAZER OBBY BY SUPER players away. 
            </p> 
 
 
            <p> 
                Eku's alternate accounts were subsequently banned 
                from the game. 
            </p> 
 
 
            <p> 
                Eventually, the other project died and Eku stopped 
                that development effort. 
            </p> 
 
 
            <p> 
                Today, Eku is simply a normal player and that chapter 
                is part of the project's past. 
            </p> 
 
 
            <h3> 
                Nihir and the Growing Team 
            </h3> 
 
 
            <p> 
                Another major person in the later stages of 
                LAZER OBBY BY SUPER was 
                <strong>Nihir</strong>. 
            </p> 
 
 
            <p> 
                Nihir was the head admin during the later Eku conflict. 
            </p> 
 
 
            <p> 
                His role eventually grew beyond the first game and 
                became part of the wider Super Game Hub journey. 
            </p> 
 
 
            <p> 
                Today, Nihir serves as the 
                <strong>Chief Operations Officer</strong> of 
                Super Game Hub. 
            </p> 
 
 
            <p> 
                This is one of the important lessons from the first 
                project: people who started as players, admins or 
                helpers could eventually become part of something much 
                larger. 
            </p> 
 
 
            <h3> 
                The onlyprime1233 Rivalry 
            </h3> 
 
 
            <p> 
                LAZER OBBY BY SUPER also experienced another rival 
                situation involving 
                <strong>onlyprime1233</strong>, who was a friend 
                of Nihir. 
            </p> 
 
 
            <p> 
                He copied the LAZER OBBY idea, which caused major 
                arguments. 
            </p> 
 
 
            <p> 
                There were concerns about staff members being sent 
                to collect or copy ideas from Super's project. 
            </p> 
 
 
            <p> 
                Those users were banned, and a spy account was used 
                to observe what was happening. 
            </p> 
 
 
            <p> 
                At one point, there was also an attempt to disrupt 
                an IPL event by sending around five staff members 
                to speak negatively about Super and the project. 
            </p> 
 
 
            <p> 
                Super's staff informed him about the situation and 
                those users were banned. 
            </p> 
 
 
            <p> 
                Eventually, onlyprime1233's games were banned or 
                taken down and he left development. 
            </p> 
 
 
            <p> 
                With time, however, the conflict ended. 
                Today, Super and onlyprime1233 are friends and the 
                rivalry is peacefully in the past. 
            </p> 
 
 
            <h3> 
                The End of LAZER OBBY BY SUPER 
            </h3> 
 
 
            <p> 
                After months of development, updates and player 
                memories, the project eventually faced a problem 
                that could not be solved by simply adding another 
                update. 
            </p> 
 
 
            <p> 
                Roblox introduced newer age and experience-access 
                requirements. 
            </p> 
 
 
            <p> 
                According to the requirements Super was dealing with 
                at the time, the game needed to reach around 
                <strong>500 players within a 30-to-60-day period</strong> 
                or it would need to be set to 16+. 
            </p> 
 
 
            <p> 
                LAZER OBBY BY SUPER did not meet that requirement. 
            </p> 
 
 
            <p> 
                The experience became <strong>16+</strong>. 
            </p> 
 
 
            <p> 
                For Super, this was an extremely difficult moment. 
                LAZER OBBY BY SUPER had started from almost nothing, 
                reached around 13,000 visits and created months of 
                memories. 
            </p> 
 
 
            <p> 
                Its last update was on 
                <strong>June 15, 2026</strong>. 
            </p> 
 
 
            <p> 
                The project was effectively discontinued. 
            </p> 
 
 
            <p> 
                But LAZER OBBY BY SUPER was more than an old game. 
                It was the project that taught Super about game 
                development, scripting, building, testing, players, 
                teamwork, community, mistakes and persistence. 
            </p> 
 
 
            <p> 
                It was also the first Super Game Hub project. 
            </p> 
 
 
            <div class="story-divider"></div> 
 
 
            <h3> 
                The Next Chapter — Tea Stall Simulator 
            </h3> 
 
 
            <p> 
                The ending of LAZER OBBY BY SUPER was emotional. 
            </p> 
 
 
            <p> 
                After spending so much time on the project, seeing it 
                become 16+ was difficult. 
            </p> 
 
 
            <p> 
                Super and Nihir were both deeply upset by the ending. 
            </p> 
 
 
            <p> 
                But instead of allowing the end of one game to become 
                the end of the journey, they started thinking about 
                what could come next. 
            </p> 
 
 
            <p> 
                On <strong>June 17, 2026</strong>, a new project was 
                created: <strong>Tea Stall Simulator</strong>. 
            </p> 
 
 
            <p> 
                It was the next chapter after LAZER OBBY BY SUPER. 
            </p> 
 
 
            <p> 
                The project represented a fresh start and a chance to 
                continue building something new. 
            </p> 
 
 
            <p> 
                Tea Stall Simulator continued through the summer and 
                received its final update on 
                <strong>August 26, 2026</strong>. 
            </p> 
 
 
            <p> 
                However, the project eventually ran into bugs and was 
                discontinued. 
            </p> 
 
 
            <p> 
                Once again, the project taught an important lesson: 
                not every game survives forever, but every project 
                can teach something useful for the next one. 
            </p> 
 
 
            <h3> 
                From Games to Super Game Hub 
            </h3> 
 
 
            <p> 
                Through these projects, the idea of Super Game Hub 
                became much bigger than a single Roblox experience. 
            </p> 
 
 
            <p> 
                Game development became a way for Super to learn 
                programming, scripting, game design, project planning, 
                testing, debugging, problem-solving and technology. 
            </p> 
 
 
            <p> 
                The community around the projects also became an 
                important part of the identity. 
            </p> 
 
 
            <p> 
                Admins, staff members, players, friends, events, 
                milestones and even the difficult moments all became 
                part of the story. 
            </p> 
 
 
            <p> 
                Super Game Hub gradually grew into a Roblox development 
                and gaming community focused on creating quality, 
                accessible and engaging gaming experiences. 
            </p> 
 
 
            <p> 
                The journey also expanded into programming and 
                technology, including Python, game development and 
                an increasing interest in artificial intelligence. 
            </p> 
 
 
            <p> 
                One simple philosophy continues to represent the 
                direction: 
                <strong>#MoreQualityLessLag</strong>. 
            </p> 
 
 
            <p> 
                The aim is not simply to make a game exist. 
                The aim is to keep learning, improving performance, 
                improving quality and creating experiences that are 
                enjoyable for players. 
            </p> 
 
 
            <h3> 
                New Projects, New Direction 
            </h3> 
 
 
            <p> 
                After Tea Stall Simulator, Super Game Hub moved 
                forward with newer projects rather than depending 
                on the old games. 
            </p> 
 
 
            <p> 
                Some of the newest Super Game Hub projects are still 
                under development and cannot be publicly revealed yet. 
            </p> 
 
 
            <p> 
                Their names, concepts and game types are being kept 
                <strong>SECRET</strong> for now. 
            </p> 
 
 
            <p> 
                These upcoming projects will be revealed officially 
                when the time is right. Until then, they remain 
                <strong>COMING SOON</strong>. 
            </p> 
 
 
            <p> 
                The current focus is on development, testing, polish 
                and building something worth revealing. 
            </p> 
 
 
            <p> 
                More details will be shared in the future through 
                official Super Game Hub updates. 
            </p> 
 
 
            <h3> 
                What LAZER OBBY BY SUPER Really Started 
            </h3> 
 
 
            <p> 
                Looking back, LAZER OBBY BY SUPER started as a very 
                small idea. 
            </p> 
 
 
            <p> 
                Super was a new Roblox player who had never planned 
                to become a game developer. 
            </p> 
 
 
            <p> 
                The game began with simple Toolbox assets, basic 
                building and almost no development experience. 
            </p> 
 
 
            <p> 
                Yet that small project created empty servers, 
                Saturday events, friendships, arguments, milestones, 
                unexpected opportunities, 13,000 visits and countless 
                lessons. 
            </p> 
 
 
            <p> 
                More importantly, it changed what Super was doing with 
                technology. 
            </p> 
 
 
            <p> 
                Before LAZER OBBY BY SUPER, ChatGPT was mainly being 
                used for homework help. 
            </p> 
 
 
            <p> 
                During the project, it became an ongoing collaborator 
                for development ideas, coding, debugging and 
                problem-solving. 
            </p> 
 
 
            <p> 
                Game development stopped being a one-time experiment 
                and became a continuous learning journey. 
            </p> 
 
 
            <h3> 
                About the Founder 
            </h3> 
 
 
            <p> 
                <strong>Super</strong> is the founder of 
                Super Game Hub and a young game developer focused on 
                learning through real projects. 
            </p> 
 
 
            <p> 
                His journey started with Roblox as a player and later 
                developed into game development, scripting, game 
                design, programming, testing and project management. 
            </p> 
 
 
            <p> 
                Through every project, Super continues to explore 
                technology, programming and problem-solving while 
                building experiences and learning from both successes 
                and failures. 
            </p> 
 
 
            <p> 
                Game development is an important part of that journey, 
                while his long-term goal is to become an 
                <strong>AI Engineer</strong>. 
            </p> 
 
 
            <p> 
                Super Game Hub represents the projects, ideas, 
                experiments and experiences built along the way. 
            </p> 
 
 
            <h3> 
                The Story Is Still Being Written 
            </h3> 
 
 
            <p> 
                LAZER OBBY BY SUPER may be discontinued. 
                Tea Stall Simulator may be discontinued. 
                Some old players may no longer be around. 
                Some rivalries may be over. 
            </p> 
 
 
            <p> 
                But the lessons remain. 
            </p> 
 
 
            <p> 
                From Super's first day on Roblox to the creation of 
                Super Game Hub, the journey has always been about 
                turning curiosity into something real. 
            </p> 
 
 
            <p> 
                It started with playing Roblox. 
            </p> 
 
 
            <p> 
                Then came the idea of making a game. 
            </p> 
 
 
            <p> 
                Then came the first project. 
            </p> 
 
 
            <p> 
                Then came the players, the updates, the mistakes, 
                the milestones, the setbacks and the lessons. 
            </p> 
 
 
            <p> 
                And now comes the next chapter. 
            </p> 
 
 
            <p> 
                Super Game Hub is continuing forward — 
                one project, one idea and one lesson at a time. 
            </p> 
 
 
            <p> 
                <strong> 
                    This is only the beginning. 
                </strong> 
            </p> 
 
        ` 
    } 
 
}; 
 
 
/* ========================= 
   OPEN BLOG 
========================= */ 
 
function openBlog(blogId) { 
 
    if ( 
        !blogModal || 
        !blogModalTitle || 
        !blogModalCategory || 
        !blogModalDate || 
        !blogModalBody 
    ) { 
        return; 
    } 
 
    const post = 
        blogPosts[blogId]; 
 
    if (!post) { 
 
        showToast( 
            "This blog post is not available yet." 
        ); 
 
        return; 
    } 
 
    blogModalCategory.textContent = 
        post.category; 
 
    blogModalDate.textContent = 
        post.date; 
 
    blogModalTitle.textContent = 
        post.title; 
 
    blogModalBody.innerHTML = 
        post.body; 
 
    blogModal.classList.add( 
        "show" 
    ); 
 
    blogModal.setAttribute( 
        "aria-hidden", 
        "false" 
    ); 
 
    document.body.classList.add( 
        "blog-open" 
    ); 
 
    if (blogModalClose) { 
 
        blogModalClose.focus(); 
 
    } 
} 
 
 
/* ========================= 
   CLOSE BLOG 
========================= */ 
 
function closeBlog() { 
 
    if (!blogModal) { 
        return; 
    } 
 
    blogModal.classList.remove( 
        "show" 
    ); 
 
    blogModal.setAttribute( 
        "aria-hidden", 
        "true" 
    ); 
 
    document.body.classList.remove( 
        "blog-open" 
    ); 
} 
 
 
/* ========================= 
   BLOG BUTTONS 
========================= */ 
 
blogButtons.forEach( 
    (button) => { 
 
        button.addEventListener( 
            "click", 
            () => { 
 
                const blogId = 
                    button.dataset.blog; 
 
                openBlog( 
                    blogId 
                ); 
 
            } 
        ); 
 
    } 
); 
 
 
/* ========================= 
   BLOG CLOSE BUTTON 
========================= */ 
 
if (blogModalClose) { 
 
    blogModalClose.addEventListener( 
        "click", 
        closeBlog 
    ); 
 
} 
 
 
/* ========================= 
   BLOG OVERLAY 
========================= */ 
 
if (blogModal) { 
 
    blogModal.addEventListener( 
        "click", 
        (event) => { 
 
            if ( 
                event.target.matches( 
                    "[data-close-blog]" 
                ) 
            ) { 
 
                closeBlog(); 
 
            } 
 
        } 
    ); 
 
} 
 
 
/* ========================= 
   KEYBOARD CONTROLS 
========================= */ 
 
document.addEventListener( 
    "keydown", 
    (event) => { 
 
        if ( 
            event.key !== 
            "Escape" 
        ) { 
            return; 
        } 
 
        closeMenu(); 
 
        if ( 
            blogModal && 
            blogModal.classList.contains( 
                "show" 
            ) 
        ) { 
 
            closeBlog(); 
 
        } 
 
    } 
); 
 
 
/* ========================= 
   CLOSE MENU OUTSIDE 
========================= */ 
 
document.addEventListener( 
    "click", 
    (event) => { 
 
        if ( 
            !navLinks || 
            !menuToggle 
        ) { 
            return; 
        } 
 
        const clickedInsideMenu = 
            navLinks.contains( 
                event.target 
            ); 
 
        const clickedMenuButton = 
            menuToggle.contains( 
                event.target 
            ); 
 
        if ( 
            navLinks.classList.contains( 
                "active" 
            ) && 
            !clickedInsideMenu && 
            !clickedMenuButton 
        ) { 
 
            closeMenu(); 
 
        } 
 
    } 
); 
 
 
/* ========================= 
   DOCUMENT BUTTONS 
========================= */ 
 
documentButtons.forEach( 
    (button) => { 
 
        button.addEventListener( 
            "click", 
            () => { 
 
                const documentType = 
                    button.dataset.document; 
 
                if ( 
                    documentType === 
                    "game-documents" 
                ) { 
 
                    showToast( 
                        "Official game documents will be added here soon." 
                    ); 
 
                    return; 
                } 
 
                if ( 
                    documentType === 
                    "announcements" 
                ) { 
 
                    showToast( 
                        "Official announcements will be added here soon." 
                    ); 
 
                } 
 
            } 
        ); 
 
    } 
); 
 
 
/* ========================= 
   INITIAL LOAD 
========================= */ 
 
console.log( 
    "Super Game Hub website loaded successfully." 
);