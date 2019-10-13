# .bashrc

# エイリアスの設定
# ls（カラー表示）
alias ls='ls -G'
alias ll='ls -lG'
alias la='ls -laG'

# show git branch
# https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh
source ~/.git-prompt.sh

# 出力の後に改行を入れる
function add_line {
  if [[ -z "${PS1_NEWLINE_LOGIN}" ]]; then
    PS1_NEWLINE_LOGIN=true
  else
    printf '\n'
  fi
}
PROMPT_COMMAND='add_line'

# プロンプトの設定
export PS1='\[\e[3;37m\]\# \[\e[0;34m\]\w \[\e[0;35m\]\$\[\e[0;35m$(__git_ps1 "(%s)")\] \[\e[3;36m\]\D{%Y/%m/%d %H:%M}
\[\e[0;31m\]>\[\e[0;33m\]>\[\e[0;32m\]>\[\e[0m\] '
