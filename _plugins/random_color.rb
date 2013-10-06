module Jekyll
  class RandomColor < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @colors = ['red', 'blue', 'yellow']
    end

    def render(context)
      @colors.sample.to_s
    end
  end
end

Liquid::Template.register_tag('random_color', Jekyll::RandomColor)
