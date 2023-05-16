let cont = document.querySelector('.flex_box')

const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: '2TB',
                type: 'Maximum configurable storage2'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CB', '#B1B2B8'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: '2TB',
                type: 'Maximum configurable storage2'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        price: 2399,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CC', '#B1B2B9', '#E3CCB5'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: 'intel.png'
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: '8TB',
                type: 'Maximum configurable storage2'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]


function reload() {
    for (let item of data) {
        item.battery_img = 'battery.png'
        item.specs.camera.img = 'video.png'
        item.specs.touch = 'touch.svg'
        item.specs.other = 'Touch ID'
        let elem = document.createElement("div")
        let image = document.createElement("div")
        let img_img = document.createElement("img")
        let sircle = document.createElement("div")
        for (let sir of item.colors) {
            let sircl = document.createElement('div')
            sircl.classList.add('sircl')
            sircl.style.background = sir
            sircle.append(sircl)
            sircl.onclick = (index) => {
                let mac = sircl.parentElement.parentElement.firstChild
                let color = sircl.style.background
                if (color === 'rgb(199, 200, 202)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289056'
                } 
                if (color === 'rgb(177, 178, 183)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661'
                }
                if (color === 'rgb(227, 204, 180)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289059'
                }
                if (color === 'rgb(199, 200, 203)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497095569'
                }
                if (color === 'rgb(177, 178, 184)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481'
                }
                if (color === 'rgb(199, 200, 204)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303678'
                }
                if (color === 'rgb(177, 178, 185)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303733'
                }
                if (color === 'rgb(227, 204, 181)') {
                    mac.src = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-starlight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303732'
                }
                console.log(color);
            }
        }
        let title = document.createElement("div")
        let h1 = document.createElement("h1")
        let title_span = document.createElement("span")
        let button = document.createElement("button")
        let a = document.createElement("a")
        let display = document.createElement("div")
        let display_h1 = document.createElement("h1")
        let display_span = document.createElement("span")
        let cpu = document.createElement("div")
        let cpu_img = document.createElement("img")
        let cpu_span = document.createElement("span")
        let ram = document.createElement("div")
        let ram_img = document.createElement("img")
        let ram_span = document.createElement("span")
        let hhd = document.createElement("div")
        let hhd_h1 = document.createElement("h1")
        let hhd_span = document.createElement("span")
        let battery = document.createElement("div")
        let battery_img = document.createElement("img")
        let battery_span = document.createElement("span")
        let cam = document.createElement("div")
        let cam_img = document.createElement("img")
        let cam_span = document.createElement("span")
        let weight = document.createElement("div")
        let weight_h1 = document.createElement("h1")
        let weight_span = document.createElement("span")
        let touch = document.createElement("div")
        let touch_img = document.createElement("img")
        let touch_span = document.createElement("span")

        h1.innerHTML = item.title
        title_span.innerHTML = `From $${item.price}`
        button.innerHTML = 'Buy'
        a.innerHTML = 'Learn more'
        display_h1.innerHTML = item.specs.display.size
        display_span.innerHTML = item.specs.display.title
        cpu_span.innerHTML = item.specs.chip.title
        ram_span.innerHTML = item.specs.ram.title
        hhd_h1.innerHTML = item.specs.memory.size
        hhd_span.innerHTML = item.specs.memory.type
        battery_span.innerHTML = `Up to ${item.specs.battery} hours battery life3`
        cam_span.innerHTML = item.specs.camera.title
        weight_h1.innerHTML = item.specs.weight
        weight_span.innerHTML = 'Weight'
        touch_span.innerHTML = item.specs.other

        img_img.src = `img/${item.img}`
        cpu_img.src = `img/${item.specs.chip.description}`
        ram_img.src = `img/${item.specs.ram.description}`
        battery_img.src = `img/${item.battery_img}`
        cam_img.src = `img/${item.specs.camera.img}` 
        touch_img.src = `img/${item.specs.touch}`

        elem.classList.add('elem')
        image.classList.add('image')
        img_img.classList.add('mac')
        sircle.classList.add('sircle')
        title.classList.add('title')
        display.classList.add('display')
        cpu.classList.add('cpu')
        ram.classList.add('ram')
        hhd.classList.add('hhd')
        battery.classList.add('battery')
        cam.classList.add('cam')
        weight.classList.add('weight')
        touch.classList.add('touch')

        cont.append(elem)
        elem.append(image,title,display,cpu,hhd,battery,cam,weight,touch)
        image.append(img_img,sircle)
        title.append(h1,title_span,button,a)
        display.append(display_h1,display_span)
        cpu.append(cpu_img,cpu_span)
        ram.append(ram_img,ram_span)
        hhd.append(hhd_h1,hhd_span)
        battery.append(battery_img,battery_span)
        cam.append(cam_img,cam_span)
        weight.append(weight_h1,weight_span)
        touch.append(touch_img,touch_span)

        
    }
}

reload()
