function generateRandomHex() {
      const hexDigits = "0123456789ABCDEF";
      let result = "";
      for (let i = 0; i < 6; i++) {
        result += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
      }

      document.getElementById("hexDisp").value = "#" + result;
      document.getElementById('colorDisplay').style.backgroundColor = "#" + result;
      document.getElementById('result').textContent = "#" + result;
    }
