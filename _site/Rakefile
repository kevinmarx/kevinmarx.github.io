desc "compile and run the site"
task :default do
  pids = [
    spawn("jekyll serve"), # put `auto: true` in your _config.yml
    spawn("scss --watch styles/index.scss:styles/index.css"),
  ]
 
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
 
  loop do
    sleep 1
  end
end
