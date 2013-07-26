jquery.Gauze
====================

A jquery plugin providing "gauze" overlay like Pinterest.

## Usage:

1. include jquery and jquery.gauze into your html

        <script type="text/javascript" src="../bower_components/jquery/jquery.js"></script>
        <script type="text/javascript" src="../jquery.gauze.js"></script>


2. select the element you want to put in gauze overlay, 
   where the `options` parameter is optional.

        $(".overlay").gauze(options);

3. trigger the effect.

        $(".overlay").gauze().on();


### API:

- `$(".overlay").gauze()`: bind element with the plugin, which would hide it immediately.
- `$(".overlay").gauze().on()`: show the overlay
- `$(".overlay").gauze().off()`: close the overlay

### options:

- `closeClass`: selector used to close the overlay


### sample: see the `sample/index.html`

            <div class="original-block"> this is original block </div>

            <div class="overlay">
              <div class="overlay-content">this is overlay content</div>
              <div class="close">X</div>
            </div>

            <div class="on trigger"> on </div>
            <div class="off trigger"> off </div>

            <script type="text/javascript">
              $(function() {
                $(".overlay").gauze();

                $(".on").click(function() {
                  $(".overlay").gauze().on();
                });

                $(".off").click(function() {
                  $(".overlay").gauze().off();
                });
              });
            </script>

### LICENSE:

MIT LICENSE
