<script>
    function cambiarColor() {
        var colores = ["#FF5733","#45D3DC", "#F1493B", "#5EDC45","#FFEBCD"];
        var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.background = colorAleatorio;
    }
</script>
}