const pianoKeys = document.querySelectorAll('.piano-key');
const pressedKeyDisplay = document.getElementById('pressed-key');


pianoKeys.forEach(key => {
    key.addEventListener('click', () => {
        key.classList.add('active-key');

        pressedKeyDisplay.innerHTML = key.innerHTML;

        playSound(key.id);

        setTimeout(() => {
            key.classList.remove('active-key');
        }, 300); 
    });
});

function playSound(keyID) {
    switch(keyID){

        case "key1":
            var key1 = new Audio('audio/1.mp3');
            key1.play();
            break;
        
        case "key2":
            var key2 = new Audio('audio/2.mp3');
            key2.play();
            break;
        
        case "key3":
            var key3 = new Audio('audio/3.mp3');
            key3.play();
            break;

        case "key4":
            var key4 = new Audio('audio/4.mp3');
            key4.play();
            break;
            
        case "key5":     
            var key5 = new Audio('audio/5.mp3');
            key5.play();
            break;
            
        case "key6":
            var key6 = new Audio('audio/6.mp3');
            key6.play();
            break;
            
        case "key7":
            var key7 = new Audio('audio/7.mp3');
            key7.play();
            break;
    
        case "key8":
            var key8 = new Audio('audio/8.mp3');
            key8.play();
            break;
            
        case "key9":
            var key9 = new Audio('audio/9.mp3');
            key9.play();
            break;
                
        case "key10":
            var key10 = new Audio('audio/10.mp3');
            key10.play();
            break;
                
        case "key11":
            var key11 = new Audio('audio/11.mp3');
            key11.play();
            break;
        
        case "key12":
            var key12 = new Audio('audio/12.mp3');
            key12.play();
            break;
        case "key1":
            var key1 = new Audio('audio/1.mp3');
            key1.play();
            break;
        
        case "key2":
            var key2 = new Audio('audio/2.mp3');
            key2.play();
            break;
        
        case "key3":
            var key3 = new Audio('audio/3.mp3');
            key3.play();
            break;

        case "key4":
            var key4 = new Audio('audio/4.mp3');
            key4.play();
            break;
            
        case "key5":     
            var key5 = new Audio('audio/5.mp3');
            key5.play();
            break;
            
        case "key6":
            var key6 = new Audio('audio/6.mp3');
            key6.play();
            break;
            
        case "key7":
            var key7 = new Audio('audio/7.mp3');
            key7.play();
            break;
    
        case "key8":
            var key8 = new Audio('audio/8.mp3');
            key8.play();
            break;
            
        case "key9":
            var key9 = new Audio('audio/9.mp3');
            key9.play();
            break;
                
        case "key10":
            var key10 = new Audio('audio/10.mp3');
            key10.play();
            break;
                
        case "key11":
            var key11 = new Audio('audio/11.mp3');
            key11.play();
            break;
        
        case "key12":
            var key12 = new Audio('audio/12.mp3');
            key12.play();
            break;

        case "key13":
            var key13 = new Audio('audio/13.mp3');
            key13.play();
            break;
        
        case "key14":
            var key14 = new Audio('audio/14.mp3');
            key14.play();
            break;

        case "key15":
            var key15 = new Audio('audio/15.mp3');
            key15.play();
            break;

        case "key16":
            var key16 = new Audio('audio/16.mp3');
            key16.play();
            break;
        
        case "key17":
            var key17 = new Audio('audio/17.mp3');
            key17.play();
            break;

        case "key18":
            var key18 = new Audio('audio/18.mp3');
            key18.play();
            break;

        case "key19":
            var key19 = new Audio('audio/19.mp3');
            key19.play();
            break;
        
        case "key20":
            var key20 = new Audio('audio/20.mp3');
            key20.play();
            break;

        case "key21":
            var key21 = new Audio('audio/21.mp3');
            key21.play();
            break;

        case "key22":
            var key22 = new Audio('audio/22.mp3');
            key22.play();
            break;
        
        case "key23":
            var key23 = new Audio('audio/23.mp3');
            key23.play();
            break;

        case "key24":
            var key24 = new Audio('audio/24.mp3');
            key24.play();
            break;
                


    }
}