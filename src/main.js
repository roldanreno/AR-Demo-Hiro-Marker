// Simple AR.js implementation for local development
class SimpleARApp {
    constructor() {
        this.init();
    }

    init() {
        this.updateStatus('Point camera at marker');
        this.setupAFrame();
        this.setupUI();
    }

    setupAFrame() {
        // Create A-Frame scene
        const sceneHTML = `
            <a-scene 
                embedded 
                arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
                vr-mode-ui="enabled: false"
                renderer="logarithmicDepthBuffer: true;">
                
                <a-camera gps-camera rotation-reader></a-camera>
                
                <a-marker 
                    type="pattern" 
                    url="./assets/pattern-logo.patt"
                    id="logo-marker">
                    
                    <a-text 
                        value="🚀 GRAB ME!" 
                        position="0 1 0" 
                        align="center" 
                        color="#007bff" 
                        scale="3 3 3"
                        animation="property: rotation; to: 0 360 0; loop: true; dur: 8000"
                        class="clickable-text">
                    </a-text>
                    
                    <a-box 
                        position="0 0.5 0" 
                        material="color: #ff6600; opacity: 0.7" 
                        scale="0.5 0.5 0.5"
                        animation="property: rotation; to: 360 0 360; loop: true; dur: 4000">
                    </a-box>
                    
                </a-marker>
            </a-scene>
        `;
        
        document.body.insertAdjacentHTML('beforeend', sceneHTML);
        
        // Add marker event listeners
        const marker = document.querySelector('#logo-marker');
        marker.addEventListener('markerFound', () => this.onMarkerFound());
        marker.addEventListener('markerLost', () => this.onMarkerLost());
        
        // Add click event to text
        const text = document.querySelector('.clickable-text');
        text.addEventListener('click', () => this.openDemoSite());
    }

    setupUI() {
        // Start button removed - AR starts automatically
        this.showInstructions();
    }



    showInstructions() {
        const instructions = document.createElement('div');
        instructions.id = 'instructions';
        instructions.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            z-index: 1000;
            max-width: 300px;
        `;
        instructions.innerHTML = `
            <p>🖼️ Point camera at printed marker</p>
            <p>👆 Tap the blue text to visit demo site</p>
        `;
        document.body.appendChild(instructions);
        
        // Hide after 5 seconds
        setTimeout(() => {
            if (instructions.parentNode) {
                instructions.remove();
            }
        }, 5000);
    }

    onMarkerFound() {
        console.log('Marker detected!');
        this.updateStatus('✅ Marker detected! Tap the text!');
        this.showFloatingButton();
    }

    onMarkerLost() {
        console.log('Marker lost');
        this.updateStatus('❌ Marker lost - keep scanning');
        this.hideFloatingButton();
    }

    showFloatingButton() {
        let button = document.getElementById('floating-button');
        if (!button) {
            button = document.createElement('button');
            button.id = 'floating-button';
            button.textContent = '🚀 Visit Demo Site';
            button.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #007bff;
                color: white;
                border: none;
                padding: 20px 30px;
                border-radius: 25px;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                z-index: 1000;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            `;
            button.addEventListener('click', () => this.openDemoSite());
            document.body.appendChild(button);
        }
        button.style.display = 'block';
    }

    hideFloatingButton() {
        const button = document.getElementById('floating-button');
        if (button) {
            button.style.display = 'none';
        }
    }

    openDemoSite() {
        window.open('https://fmf.mx/', '_blank');
    }

    updateStatus(message) {
        const statusEl = document.getElementById('status');
        if (statusEl) {
            statusEl.textContent = message;
        }
    }
}

// Wait for A-Frame to load
document.addEventListener('DOMContentLoaded', () => {
    // Check if A-Frame is loaded
    if (typeof AFRAME !== 'undefined') {
        new SimpleARApp();
    } else {
        // Wait for A-Frame to load
        window.addEventListener('load', () => {
            setTimeout(() => {
                new SimpleARApp();
            }, 1000);
        });
    }
});
