(function($) {
  $(document).ready(function() {
    if ($.Isotope) {
      $.Isotope.prototype._getCenteredMasonryColumns = function() {
        this.width = this.element.width();

        var parentWidth = this.element.parent().width();

        var colW = this.options.masonry && this.options.masonry.columnWidth || parentWidth;

        var cols = Math.floor( parentWidth / colW );
        cols = Math.max( cols, 1 );

        // i.e. this.masonry.cols = ....
        this.masonry.cols = cols;
        // i.e. this.masonry.columnWidth = ...
        this.masonry.columnWidth = colW;
      };

      $.Isotope.prototype._masonryReset = function() {
        // layout-specific props
        this.masonry = {};
        // FIXME shouldn't have to call this again
        this._getCenteredMasonryColumns();
        var i = this.masonry.cols;
        this.masonry.colYs = [];
        while (i--) {
          this.masonry.colYs.push( 0 );
        }
      };

      $.Isotope.prototype._masonryResizeChanged = function() {
        var prevColCount = this.masonry.cols;
        // get updated colCount
        this._getCenteredMasonryColumns();
        return ( this.masonry.cols !== prevColCount );
      };

      $.Isotope.prototype._masonryGetContainerSize = function() {
        var unusedCols = 0,
            i = this.masonry.cols;
        // count unused columns
        while ( --i ) {
          if ( this.masonry.colYs[i] !== 0 ) {
            break;
          }
          unusedCols++;
        }

        return {
              height : Math.max.apply( Math, this.masonry.colYs ),
              // fit container to columns that have been used;
              width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
            };
      };

      // run it
      var $container = $('#Posts')
      var options = {
        animationOptions: {
          duration: 200,
          easing: 'linear',
          queue: false
        },
        masonry: {
          columnWidth: 320
        },
        layoutMode: 'masonry',
        filter: '*',
        sortBy: 'date',
        getSortData: {
          date: function( $elem ) {
            return Math.random() * 20 | 0
          }
        }
      }
      $container.isotope(options)

      $('#Filters a').click(function(e) {
        e.preventDefault()
        options.filter = $(this).data('filter')
        $container.isotope(options)
      })
    }

    // make it go
    $('html').show()
  })
})(jQuery)
