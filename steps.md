# Basic Ruby on Rails app

1. Make sure you have a clean installation of Ruby and Rails.
    1. Remove ruby installation with purging all files:
        `sudo apt-get remove ruby-full --purge`
    1. Remove current installation, completely and remove all existing gems.
        1. use command `sudo rm -r /var/lib/gems` to completely remove existing "gems"
        - Gems are the packages used in ruby
    1. Ensure that you have yaml installed in your ubuntu instance
        `sudo apt-get install libyaml-dev`
        - This *should* fix the psych dependancy issue.
    1. Install the full version of ruby
        `sudo apt-get install ruby-full`
    1. Check that the installation worked
        `ruby --version`
    1. Use Ruby's gem installer to install rails. This is analagous to using pip to install Django.
        - Don't forget to use sudo, becasue it is installing to /var/lib/gems, which is a "root" folder.
        `sudo gem install rails`
    1. Again, check to ensure that you have rails installed with `rails --version`
1. Start doing stuff that seems oddly similar to django things, but with ruby as the language. 
    - Ruby is alsy a DRY language. It also use the MVC model. So ultimately it should feel suuuuuper similar to Django. 