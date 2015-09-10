  # alias sbl='open -a "Sublime Text"'

  # Enable tab completion
  source ~/git-completion.bash

  # colors!
  green="\[\033[0;32m\]"
  purple="\[\033[0;35m\]"
  reset="\[\033[0m\]"
  GREENBOLD="\[\033[1;32m\]"

  # Change command prompt
  source ~/git-prompt.sh
  export GIT_PS1_SHOWDIRTYSTATE=1
  # '\u' adds the name of the current user to the prompt
  # '\$(__git_ps1)' adds git-related stuff
  # '\W' adds the name of the current directory
  export PS1="$GREENBOLD\u$green\$(__git_ps1)$purple \W $ $reset"

  # Meta alias's
  alias subl="open -a Sublime\ Text"
  alias prof="subl ~/.bash_profile"
  alias reprof=". ~/.bash_profile"

  # Navigational alias's
  alias de="cd ~/Desktop"
  alias ds="cd ~/Documents"
  alias ..="cd .."

  alias finder="open -a Finder"
  alias oc="open -a Google\ Chrome"

  # HR shortcut
  alias dcs="cd /Users/brianhsu/Documents"

  #git shortcut
  alias gb="git branch"
  alias gs="git status"
  alias gst="git stash"
  alias ga="git add"
  alias gaa="git add ."
  alias gc="git commit"
  alias gcl="git clone"
  alias gl="git log"
  alias glo="git log --pretty=oneline"
  alias glu="git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
  alias gck="git checkout"
  alias gckm="git checkout master"
  alias gckt="git checkout test"
  alias gckb="git checkout -b"
  alias gt="git tag"
  alias grs="git reset"
  alias grv="git revert"
  alias gm="git merge"
  alias gpom="git push origin master"
  alias gplom="git pull origin master"
  alias gpot="git push origin test"
  alias gpum="git pull upstream master"
  alias gd="git diff"
  alias grm="git rebase master"
  alias grc="git rebase --continue"
  alias grih="git rebase -i HEAD~"
  alias gprum="git pull --rebase upstream master"
  alias gpo="git push origin"
  alias grmv="git remote -v"
  alias grma="git remote add"

  #db
  alias ptst="lunchy start postgres"
  alias ptsp="lunchy stop postgres"

  #postgresql local
  alias ptlch="psql -h localhost"

  ###HTTP
  alias pyserve="python -m SimpleHTTPServer"
