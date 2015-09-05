 var descriptions= {
  ".git": {
    "desc": "<p>A Git repository comes in two different flavours:</p> \t\t\t</div> \t\t\t<div class='ulist'> \t\t\t<ul> \t\t\t<li> \t\t\t<p>a <code>.git</code> directory at the root of the working tree;</p> \t\t\t</li> \t\t\t<li> \t\t\t<p>a <code>&lt;project&gt;.git</code> directory that is a <em>bare</em> repository \t\t\t(i.e. without its own working tree), that is typically used for \t\t\texchanging histories with others by pushing into it and fetching \t\t\tfrom it.</p> \t\t\t</li> \t\t\t</ul> \t\t\t</div> \t\t\t<div class='paragraph'> \t\t\t<p><strong>Note</strong>: Also you can have a plain text file <code>.git</code> at the root of \t\t\tyour working tree, containing <code>gitdir: &lt;path&gt;</code> to point at the real \t\t\tdirectory that has the repository.  This mechanism is often used for \t\t\ta working tree of a submodule checkout, to allow you in the \t\t\tcontaining superproject to <code>git checkout</code> a branch that does not \t\t\thave the submodule.  The <code>checkout</code> has to remove the entire \t\t\tsubmodule working tree, without losing the submodule repository.</p> \t\t\t</div>",
    "data_content": "<pre></code>Unnamed repository; edit this file 'description' to name the repository.</code></pre>"
  },
  "description": {
    "desc": "Some git clients use this to show up information (e.g. name) about the repository.",
    "data_content": "<pre><code>Unnamed repository; edit this file 'description' to name the repository.</code></pre>"
  },
  "FETCH_HEAD": {
    "desc": "The SHAs of branch/remote heads that were updated during the last <code>git fetch</code>",
    "data_content": "<pre><code> \
348a4	branch 'develop' of bitbucket.net:root/grocshop-backend\n\
09cb3	not-for-merge	branch 'master' of bitbucket.net:root/grocshop-backend\n\
</code></pre>"
  },
  "COMMIT_EDITMSG": {
    "desc": "This file contains the last commit’s message",
    "data_content": "<pre><code>Introduced 'deleted' metadata in list sync api</code></pre>"
  },
  "MERGE_HEAD": {
    "desc": "When doing a merge, this is the SHA of the branch you’re merging from.",
    "data_content": "<pre><code>09cb3</code></pre>"
  },
  "MERGE_MODE": {
    "desc": "Used to communicate constraints that were originally given to <code>git merge</code> to git commit when a merge conflicts, and a separate <code>git commit</code> is needed to conclude it. Currently <code>--no-ff</code> is the only constraints passed this way.",
    "data_content": ""
  },
  "MERGE_MSG": {
    "desc": "Enumerates conflicts that happen during your current merge.",
    "data_content": ""
  },
  "branches/": {
    "desc": "A slightly deprecated way to store shorthands to be used \t\t\tto specify a URL to <em>git fetch</em>, <em>git pull</em> and <em>git push</em>. \t\t\tA file can be stored as <code>branches/&lt;name&gt;</code> and then \t\t\t<em>name</em> can be given to these commands in place of \t\t\t<em>repository</em> argument.  See the REMOTES section in \t\t\t<a href='/docs/git-fetch'>git-fetch[1]</a> for details.  This mechanism is legacy \t\t\tand not likely to be found in modern repositories. This \t\t\tdirectory is ignored if <code>$GIT_COMMON_DIR</code> is set and \t\t\t<code>$GIT_COMMON_DIR/branches</code> will be used instead.",
    "data_content": ""
  },
  "config": {
    "desc": "<p>Repository specific configuration file. This file is ignored \t\t\tif $GIT_COMMON_DIR </code>is set and <code>$GIT_COMMON_DIR/</code>config, will be \t\t\tused instead.</p>",
    "data_content": "<pre><code> \
[core] \n\
	repositoryformatversion = 0 \n\
	filemode = true \n\
	bare = false \n\
	logallrefupdates = true \n\
[remote \"origin\"] \n\
	url = git@bitbucket.net:root/grocshop-backend.git \n\
	fetch = +refs/heads/*:refs/remotes/origin/* \n\
[branch \"develop\"] \n\
	remote = origin \n\
	merge = refs/heads/develop \n\
</code></pre>"
  },
  "HEAD": {
    "desc": "<p>A symref (see glossary) to the <code>refs/heads/</code> namespace \t\t\tdescribing the currently active branch.  It does not mean \t\t\tmuch if the repository is not associated with any working tree \t\t\t(i.e. a <em>bare</em> repository), but a valid Git repository \t\t\t<strong>must</strong> have the HEAD file; some porcelains may use it to \t\t\tguess the designated 'default' branch of the repository \t\t\t(usually <em>master</em>).  It is legal if the named branch \t\t\t<em>name</em> does not (yet) exist.  In some legacy setups, it is \t\t\ta symbolic link instead of a symref that points at the current \t\t\tbranch.</p> \t\t\t<div class='paragraph'> \t\t\t<p>HEAD can also record a specific commit directly, instead of \t\t\tbeing a symref to point at the current branch.  Such a state \t\t\tis often called <em>detached HEAD.</em>  See <a href='/docs/git-checkout'>git-checkout[1]</a> \t\t\tfor details.</p> \t\t\t</div> ",
    "data_content": "<pre><code>ref: refs/heads/develop</code></pre>"
  },
  "hooks/": {
    "desc": "<p>Hooks are customization scripts used by various Git \t\t\tcommands.  A handful of sample hooks are installed when \t\t\t<em>git init</em> is run, but all of them are disabled by \t\t\tdefault.  To enable, the <code>.sample</code> suffix has to be \t\t\tremoved from the filename by renaming. \t\t\tRead <a href='/docs/githooks'>githooks[5]</a> for more details about \t\t\teach hook. This directory is ignored if </code>$GIT_COMMON_DIR</code> is set \t\t\tand <code>$GIT_COMMON_DIR/hooks</code> will be used instead.</p>",
    "data_content": ""
  },
  "index": {
    "desc": "<p>The current index file for the repository.  It is usually not found in a bare repository.</p>",
    "data_content": "<pre><code>Binary content...</code></pre>"
  },
  "info/": {
    "desc": "<p>Additional information about the repository is recorded \t\t\tin this directory. This directory is ignored if <code>$GIT_COMMON_DIR</code> \t\t\tis set and <code>$GIT_COMMON_DIR/index</code> will be used instead.</p>",
    "data_content": ""
  },
  "info/refs": {
    "desc": "<p>This file helps dumb transports discover what refs are \t\t\tavailable in this repository.  If the repository is \t\t\tpublished for dumb transports, this file should be \t\t\tregenerated by <em>git update-server-info</em> every time a tag \t\t\tor branch is created or modified.  This is normally done \t\t\tfrom the <code>hooks/update</code> hook, which is run by the \t\t\t<em>git-receive-pack</em> command when you <em>git push</em> into the \t\t\trepository.</p>",
    "data_content": "<pre><code>\
ee52a	refs/heads/develop\n\
124f2	refs/remotes/origin/HEAD\n\
124f2	refs/remotes/origin/develop\n\
09cb3	refs/remotes/origin/master\n\
1f841	refs/stash\n\
    </code></pre>"
  },
  "info/grafts": {
    "desc": "<p>This file records fake commit ancestry information, to \t\t\tpretend the set of parents a commit has is different \t\t\tfrom how the commit was actually created.  One record \t\t\tper line describes a commit and its fake parents by \t\t\tlisting their 40-byte hexadecimal object names separated \t\t\tby a space and terminated by a newline.</p> \t\t\t<div class='paragraph'> \t\t\t<p>Note that the grafts mechanism is outdated and can lead to problems \t\t\ttransferring objects between repositories; see <a href='/docs/git-replace'>git-replace[1]</a> \t\t\tfor a more flexible and robust system to do the same thing.</p></div>",
    "data_content": ""
  },
  "info/exclude": {
    "desc": "<p>This file records fake commit ancestry information, to \t\t\tpretend the set of parents a commit has is different \t\t\tfrom how the commit was actually created.  One record \t\t\tper line describes a commit and its fake parents by \t\t\tlisting their 40-byte hexadecimal object names separated \t\t\tby a space and terminated by a newline.</p> \t\t\t<div class='paragraph'> \t\t\t<p>Note that the grafts mechanism is outdated and can lead to problems \t\t\ttransferring objects between repositories; see <a href='/docs/git-replace'>git-replace[1]</a> \t\t\tfor a more flexible and robust system to do the same thing.</p></div>",
    "data_content": "<pre><code>\
# git ls-files --others --exclude-from=.git/info/exclude\n\
# Lines that start with '#' are comments.\n\
# For a project mostly in C, the following would be a good set of\n\
# exclude patterns (uncomment them if you want to use them):\n\
# *.[oa]\n\
# *~\n\
    </code></pre>"
  },
  "info/sparse-checkout": {
    "desc": "<p>This file stores sparse checkout patterns. See also: <a href='/docs/git-read-tree'>git-read-tree[1]</a>.</p>",
    "data_content": ""
  },
  "objects/": {
    "desc": "<p>Object store associated with this repository.  Usually \t\t\tan object store is self sufficient (i.e. all the objects \t\t\tthat are referred to by an object found in it are also \t\t\tfound in it), but there are a few ways to violate it.</p> \t\t\t<div class='olist arabic'> \t\t\t<ol class='arabic'> \t\t\t<li> \t\t\t<p>You could have an incomplete but locally usable repository \t\t\tby creating a shallow clone.  See <a href='/docs/git-clone'>git-clone[1]</a>.</p> \t\t\t</li> \t\t\t<li> \t\t\t<p>You could be using the <code>objects/info/alternates</code> or \t\t\t<code>$GIT_ALTERNATE_OBJECT_DIRECTORIES</code> mechanisms to <em>borrow</em> \t\t\tobjects from other object stores.  A repository with this kind \t\t\tof incomplete object store is not suitable to be published for \t\t\tuse with dumb transports but otherwise is OK as long as \t\t\t<code>objects/info/alternates</code> points at the object stores it \t\t\tborrows from.</p> \t\t\t<div class='paragraph'> \t\t\t<p>This directory is ignored if <code>$GIT_COMMON_DIR</code> is set and \t\t\t<code>$GIT_COMMON_DIR/objects</code> will be used instead.</p> \t\t\t</div> \t\t\t</li> \t\t\t</ol> \t\t\t</div>",
    "data_content": ""
  },
  "objects/1a/": {
    "desc": "<p>A newly created object is stored in its own file. \t\t\tThe objects are splayed over 256 subdirectories using \t\t\tthe first two characters of the sha1 object name to \t\t\tkeep the number of directory entries in <code>objects</code> \t\t\titself to a manageable number. Objects found \t\t\there are often called <em>unpacked</em> (or <em>loose</em>) objects.</p>",
    "data_content": ""
  },
  "objects/1a/f907837b9d082d62d811bd6a3aa3e97b8c9509": {
    "desc": "One of the file containing a loose object. Loose objects are the simpler format. It is simply the compressed data stored in a single file on disk. Every object written to a seperate file.",
    "data_content": "Binary content..."
  },
  "objects/pack/": {
    "desc": " <p>Packs (files that store many object in compressed form, \t\t\talong with index files to allow them to be randomly \t\t\taccessed) are found in this directory.</p>",
    "data_content": ""
  },
  "objects/info/": {
    "desc": "<p>Additional information about the object store is recorded in this directory.</p>",
    "data_content": ""
  },
  "objects/info/packs": {
    "desc": "<p>This file is to help dumb transports discover what packs \t\t\tare available in this object store.  Whenever a pack is \t\t\tadded or removed, <code>git update-server-info</code> should be run \t\t\tto keep this file up-to-date if the repository is \t\t\tpublished for dumb transports.  <em>git repack</em> does this by default.</p>",
    "data_content": "<pre><code>P pack-b4667f6e71a45b82f7952314227b41de995877e7.pack</code></pre>"
  },
  "objects/pack/pack-24e5c051c527c14892f6f87720812c37c725ba5e.idx": {
    "desc": "These files store a table-of-contents list of objects contained within the pack",
    "data_content": "Binary content..."
  },
  "objects/pack/pack-24e5c051c527c14892f6f87720812c37c725ba5e.pack": {
    "desc": "These files store many objects in compressed form.",
    "data_content": ""
  },
  "objects/info/alternates": {
    "desc": "<p>This file records paths to alternate object stores that \t\t\tthis object store borrows objects from, one pathname per \t\t\tline. Note that not only native Git tools use it locally, \t\t\tbut the HTTP fetcher also tries to use it remotely; this \t\t\twill usually work if you have relative paths (relative \t\t\tto the object database, not to the repository!) in your \t\t\talternates file, but it will not work if you use absolute \t\t\tpaths unless the absolute path in filesystem and web URL \t\t\tis the same. See also <em>objects/info/http-alternates</em>.</p>",
    "data_content": ""
  },
  "objects/info/http-alternates": {
    "desc": " <p>This file records URLs to alternate object stores that \t\t\tthis object store borrows objects from, to be used when the repository is fetched over HTTP.</p>",
    "data_content": ""
  },
  "refs/": {
    "desc": "<p>References are stored in subdirectories of this \t\t\tdirectory.  The <em>git prune</em> command knows to preserve \t\t\tobjects reachable from refs found in this directory and \t\t\tits subdirectories. This directory is ignored if <code>$GIT_COMMON_DIR</code> \t\t\tis set and <code>$GIT_COMMON_DIR/refs</code> will be used instead.</p> \t\t\t",
    "data_content": ""
  },
  "refs/heads/": {
    "desc": "<p>records tip-of-the-tree commit objects of branch <code>name</code></p>",
    "data_content": ""
  },
  "refs/tags/": {
    "desc": "<p>records any object name (not necessarily a commit \t\t\t\tobject, or a tag object that points at a commit object).</p>",
    "data_content": ""
  },
  "refs/tags/1.0":{
  	"desc":"A tag record named <code>1.0</code>",
  	"data_content":"<pre><code>ee52a</code></pre>"
  },
  "refs/stash": {
    "desc": "records tip-of-the-tree stash objects",
    "data_content": "<pre><code>1f841</code></pre>"
  },
  "refs/remotes/": {
    "desc": "<p>records tip-of-the-tree commit objects of branches copied \t\t\t\tfrom a remote repository.</p>",
    "data_content": ""
  },
    "refs/remotes/origin/": {
    "desc": "<p>records tip-of-the-tree commit objects of branches copied \t\t\t\tfrom a remote repository named <code>origin</code>.</p>",
    "data_content": ""
  },
    "refs/remotes/origin/HEAD": {
    "desc": "<p>records tip-of-the-tree commit objects of branches copied \t\t\t\tfrom a remote repository named <code>origin</code>.</p>",
    "data_content": "<pre><code>ref: refs/remotes/origin/develop</code></pre>"
  },
  "refs/replace/": {
    "desc": "<p>records the SHA-1 of the object that replaces <code>&lt;obj-sha1&gt;</code>.\tThis is similar to info/grafts and is internally used and maintained by <a href='/docs/git-replace'>git-replace[1]</a>. Such refs can be exchanged  \t\t\t\tbetween repositories while grafts are not.</p>",
    "data_content": ""
  },
  "packed-refs": {
    "desc": "<p>records the same information as refs/heads/, refs/tags/, \t\t\t\tand friends record in a more efficient way.  See \t\t\t\t<a href='/docs/git-pack-refs'>git-pack-refs[1]</a>. This file is ignored if <code>$GIT_COMMON_DIR</code> \t\t\t\tis set and <code>$GIT_COMMON_DIR/packed-refs</code> will be used instead.</p>",
    "data_content": "<pre><code>\
# pack-refs with: peeled fully-peeled \
ee52a refs/heads/develop\n\
124f2 refs/remotes/origin/develop\n\
09cb3 refs/remotes/origin/master\n\
1f841 refs/stash\n\
</code></pre>"
  },
  "logs/": {
    "desc": "<p>Records of changes made to refs are stored in this directory.  This directory is ignored if <code>$GIT_COMMON_DIR</code> is set and <code>$GIT_COMMON_DIR/logs</code> will be used instead.</p>",
    "data_content": ""
  },
  "logs/HEAD": {
    "desc": "<p>Records of changes made to refs are stored in this directory. \t\t\t\tSee <a href='/docs/git-update-ref'>git-update-ref[1]</a> for more information. This \t\t\t\tdirectory is ignored if <code>$GIT_COMMON_DIR</code> is set and \t\t\t\t<code>$GIT_COMMON_DIR/logs</code> will be used instead.</p>",
    "data_content": "<pre><code>\
00000 b9cef Administrator <admin@mybucket.com> 1434889437 +0530	clone: from git@bitbucket.net:root/grocshop-backend.git\n\
b9cef 18014 Administrator <admin@mybucket.com> 1434969632 +0530	pull: Fast-forward\n\
18014 20562 Administrator <admin@mybucket.com> 1434970347 +0530	commit: staging conf\n\
20562 6eaee Administrator <admin@mybucket.com> 1435385956 +0530	commit: reverse the list\n\
</code></pre>"
  },
  "logs/refs/": {
    "desc": "<p>Records all changes made to the different type of references.</p>",
    "data_content": ""
  },
  "logs/refs/heads/": {
    "desc": "<p>Records all changes made to the branch tip named <code>name</code>.</p>",
    "data_content": "<p>Records all changes made to the branch tip named <code>name</code>."
  },
  "logs/refs/heads/develop":{
  	"desc":"<p>Records all changes made to the branch tip named <code>develop</code>.",
  	"data_content":"<pre><code>\
00000 b9cef Administrator <admin@mybucket.com> 1434889437 +0530	clone: from git@bitbucket.net:root/grocshop-backend.git\n\
b9cef 18014 Administrator <admin@mybucket.com> 1434969632 +0530	pull: Fast-forward\n\
18014 20562 Administrator <admin@mybucket.com> 1434970347 +0530	commit: staging conf\n\
20562 6eaee Administrator <admin@mybucket.com> 1435385956 +0530	commit: reverse the list\n\
</code></pre>"
  },
  "logs/refs/tags/": {
    "desc": "<p>Records all changes made to the tag named <code>name</code>.</p>",
    "data_content": ""
  },
  "logs/refs/stash": {
    "desc": "Records all the stashed work",
    "data_content": "<pre><code>00000 1f841 Administrator <admin@mybucket.com> 1434969619 +0530	WIP on develop: b9cef16 1. introduced pagination</code></pre>"
  },
  "logs/refs/remotes/": {
    "desc": "<p>Records all changes made to the remote branches named <code>name</code>.",
    "data_content": ""
  },
  "logs/refs/remotes/origin/":{
  	"desc":"A remote named <code>origin</code>",
  	"data_content":""
  },
  "logs/refs/remotes/origin/master":{
  	"desc":"<p>Records all the ref changes to the <code>master</code> branch of remote named <code>origin</code>",
  	"data_content":"<pre><code>\
1e7f6 2d3ec Administrator <admin@mybucket.com> 1437486721 +0530	pull: fast-forward\n\
2d3ec 09cb3 Administrator <admin@mybucket.com> 1438861858 +0530	pull: fast-forward\n\
</code></pre>"
  },
  "shallow": {
    "desc": "\t<p>This is similar to <code>info/grafts</code> but is internally used \t\t\t\tand maintained by shallow clone mechanism.  See <code>--depth</code> \t\t\t\toption to <a href='/docs/git-clone'>git-clone[1]</a> and <a href='/docs/git-fetch'>git-fetch[1]</a>. This \t\t\t\tfile is ignored if <code>$GIT_COMMON_DIR</code> is set and \t\t\t\t<code>$GIT_COMMON_DIR/shallow</code> will be used instead.</p>",
    "data_content": ""
  },
  "ORIG_HEAD": {
    "desc": "When doing a merge, this is the SHA of the branch you’re merging into.",
    "data_content": "<pre><code>348a4</code></pre>"
  },
  "commondir": {
    "desc": "<p>If this file exists, <code>$GIT_COMMON_DIR</code> (see <a href='/docs/git'>git[1]</a>) will \t\t\t\tbe set to the path specified in this file if it is not \t\t\t\texplicitly set. If the specified path is relative, it is \t\t\t\trelative to <code>$GIT_DIR</code>. The repository with commondir is \t\t\t\tincomplete without the repository pointed by 'commondir'.</p>",
    "data_content": ""
  },
  "modules": {
    "desc": "Contains the git-repositories of the submodules.",
    "data_content": ""
  },
  "worktrees": {
    "desc": "<p>Contains worktree specific information of linked \t\t\t\tcheckouts. Each subdirectory contains the worktree-related \t\t\t\tpart of a linked checkout. This directory is ignored if \t\t\t\t<code>$GIT_COMMON_DIR</code> is set and <code>$GIT_COMMON_DIR/worktrees</code> will be \t\t\t\tused instead.</p>",
    "data_content": ""
  },
  "worktrees/<id>/gitdir": {
    "desc": "",
    "data_content": ""
  },
  "worktrees/<id>/link": {
    "desc": "",
    "data_content": ""
  },
  "worktrees/<id>/locked": {
    "desc": "",
    "data_content": ""
  },
 "hooks/applypatch-msg.sample":{
 	"desc":"<p>This hook is invoked by <em>git am</em> script.  It takes a single \
parameter, the name of the file that holds the proposed commit \
log message.  Exiting with non-zero status causes \
<em>git am</em> to abort before applying the patch.</p> \
<p>The hook is allowed to edit the message file in place, and can \
be used to normalize the message into some project standard \
format (if the project has one). It can also be used to refuse \
the commit after inspecting the message file.</p> \
<p>The default <em>applypatch-msg</em> hook, when enabled, runs the \
<em>commit-msg</em> hook, if the latter is enabled.</p> \
</div>",
 	"data_content":"<pre><code>\
#!/bin/sh\n\
#\n\
# An example hook script to check the commit log message taken by\n\
# applypatch from an e-mail message.\n\
#\n\
# The hook should exit with non-zero status after issuing an\n\
# appropriate message if it wants to stop the commit.  The hook is\n\
# allowed to edit the commit message file.\n\
#\n\
# To enable this hook, rename this file to \"applypatch-msg\".\n\
\n\. git-sh-setup\n\
test -x \"$GIT_DIR/hooks/commit-msg\" &&\n\
	exec \"$GIT_DIR/hooks/commit-msg\" ${1+\"$@\"}\n\
:\n\
</code></pre>"
 },
 "hooks/commit-msg.sample":{
 	"desc":"This hook is invoked by git commit, and can be bypassed with <code>--no-verify</code> option. It takes a single parameter, the name of the file that holds the proposed commit log message. Exiting with non-zero status causes the git commit to abort.\
The hook is allowed to edit the message file in place, and can be used to normalize the message into some project standard format (if the project has one). It can also be used to refuse the commit after inspecting the message file.\
The default commit-msg hook, when enabled, detects duplicate \"Signed-off-by\" lines, and aborts the commit if one is found.\
",
 	"data_content":"<pre><code>\
#!/bin/sh\n\
#\n\
# An example hook script to check the commit log message.\n\
# Called by \"git commit\" with one argument, the name of the file\n\
# that has the commit message.  The hook should exit with non-zero\n\
# status after issuing an appropriate message if it wants to stop the\n\
# commit.  The hook is allowed to edit the commit message file.\n\
#\n\
# To enable this hook, rename this file to \"commit-msg\".\n\
\n\
# Uncomment the below to add a Signed-off-by line to the message.\n\
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg\n\
# hook is more suited to it.\n\
#\n\
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')\n\
# grep -qs \"^$SOB\" \"$1\" || echo \"$SOB\" >> \"$1\"\n\
\n\
# This example catches duplicate Signed-off-by lines.\n\
\n\
test \"\" = \"$(grep '^Signed-off-by: ' \"$1\" |\n\
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')\" || {\n\
	echo >&2 Duplicate Signed-off-by lines.\n\
	exit 1\n\
}\n\
</code></pre>"
 },
 "hooks/post-update.sample":{
 	"desc":"<div class=\"paragraph\"> \
<p>This hook is invoked by <em>git-receive-pack</em> on the remote repository, \
which happens when a <em>git push</em> is done on a local repository. \
It executes on the remote repository once after all the refs have \
been updated.</p> \
</div> \
<div class=\"paragraph\"> \
<p>It takes a variable number of parameters, each of which is the \
name of ref that was actually updated.</p> \
</div> \
<div class=\"paragraph\"> \
<p>This hook is meant primarily for notification, and cannot affect \
the outcome of <em>git-receive-pack</em>.</p> \
</div> \
<div class=\"paragraph\"> \
<p>The <em>post-update</em> hook can tell what are the heads that were pushed, \
but it does not know what their original and updated values are, \
so it is a poor place to do log old..new. The \
<a href=\"#post-receive\"><em>post-receive</em></a> hook does get both original and \
updated values of the refs. You might consider it instead if you need \
them.</p> \
</div> \
<div class=\"paragraph\"> \
<p>When enabled, the default <em>post-update</em> hook runs \
<em>git update-server-info</em> to keep the information used by dumb \
transports (e.g., HTTP) up-to-date.  If you are publishing \
a Git repository that is accessible via HTTP, you should \
probably enable this hook.</p> \
</div> \
<div class=\"paragraph\"> \
<p>Both standard output and standard error output are forwarded to \
<em>git send-pack</em> on the other end, so you can simply <code>echo</code> messages \
for the user.</p> \
</div>   \
",
 	"data_content":"<pre><code>\
#!/bin/sh\n\
#\n\
# An example hook script to prepare a packed repository for use over\n\
# dumb transports.\n\
#\n\
# To enable this hook, rename this file to \"post-update\".\n\
\n\
exec git update-server-info\n\
</code></pre>"
 },
 "hooks/pre-applypatch.sample":{
 	"desc":"This hook is invoked by git am. It takes no parameter, and is invoked after the patch is applied, but before a commit is made.\
If it exits with non-zero status, then the working tree will not be committed after applying the patch.\
It can be used to inspect the current working tree and refuse to make a commit if it does not pass certain test.\
The default pre-applypatch hook, when enabled, runs the pre-commit hook, if the latter is enabled.\
",
 	"data_content":"<pre><code>\
#!/bin/sh\n\
#\n\
# An example hook script to verify what is about to be committed\n\
# by applypatch from an e-mail message.\n\
#\n\
# The hook should exit with non-zero status after issuing an\n\
# appropriate message if it wants to stop the commit.\n\
#\n\
# To enable this hook, rename this file to \"pre-applypatch\".\n\
\n\
. git-sh-setup\n\
test -x \"$GIT_DIR/hooks/pre-commit\" &&\n\
	exec \"$GIT_DIR/hooks/pre-commit\" ${1+\"$@\"}\n\
:\n\
</code></pre>"
 },
 "hooks/pre-commit.sample":{
 	"desc":"<div class=\"paragraph\"> \
<p>This hook is invoked by <em>git commit</em>, and can be bypassed \
with <code>--no-verify</code> option.  It takes no parameter, and is \
invoked before obtaining the proposed commit log message and \
making a commit.  Exiting with non-zero status from this script \
causes the <em>git commit</em> to abort.</p> \
</div> \
<div class=\"paragraph\"> \
<p>The default <em>pre-commit</em> hook, when enabled, catches introduction \
of lines with trailing whitespaces and aborts the commit when \
such a line is found.</p> \
</div> \
<div class=\"paragraph\"> \
<p>All the <em>git commit</em> hooks are invoked with the environment \
variable <code>GIT_EDITOR=:</code> if the command will not bring up an editor \
to modify the commit message.</p> \
</div>",
 	"data_content":"<pre><code><a href=\"https://www.atlassian.com/git/tutorials/git-hooks/local-hooks\">See samples here...</a></code></pre>"
 },
 "hooks/prepare-commit-msg.sample":{
 	"desc":"<div class=\"paragraph\"> \
<p>This hook is invoked by <em>git commit</em> right after preparing the \
default log message, and before the editor is started.</p> \
</div> \
<div class=\"paragraph\"> \
<p>It takes one to three parameters.  The first is the name of the file \
that contains the commit log message.  The second is the source of the commit \
message, and can be: <code>message</code> (if a <code>-m</code> or <code>-F</code> option was \
given); <code>template</code> (if a <code>-t</code> option was given or the \
configuration option <code>commit.template</code> is set); <code>merge</code> (if the \
commit is a merge or a <code>.git/MERGE_MSG</code> file exists); <code>squash</code> \
(if a <code>.git/SQUASH_MSG</code> file exists); or <code>commit</code>, followed by \
a commit SHA-1 (if a <code>-c</code>, <code>-C</code> or <code>--amend</code> option was given).</p> \
</div> \
<div class=\"paragraph\"> \
<p>If the exit status is non-zero, <em>git commit</em> will abort.</p> \
</div> \
<div class=\"paragraph\"> \
<p>The purpose of the hook is to edit the message file in place, and \
it is not suppressed by the <code>--no-verify</code> option.  A non-zero exit \
means a failure of the hook and aborts the commit.  It should not \
be used as replacement for pre-commit hook.</p> \
</div> \
<div class=\"paragraph\"> \
<p>The sample <code>prepare-commit-msg</code> hook that comes with Git comments \
out the <code>Conflicts:</code> part of a merge’s commit message.</p> \
</div>",
 	"data_content":"<pre><code><a href=\"https://www.atlassian.com/git/tutorials/git-hooks/local-hooks\">See samples here...</a></code></pre>"
 },
 "hooks/pre-push.sample":{
 	"desc":"<div class=\"paragraph\"> \
<p>This hook is called by <em>git push</em> and can be used to prevent a push from taking \
place.  The hook is called with two parameters which provide the name and \
location of the destination remote, if a named remote is not being used both \
values will be the same.</p> \
</div> \
<div class=\"paragraph\"> \
<p>Information about what is to be pushed is provided on the hook’s standard \
input with lines of the form:</p> \
</div> \
<div class=\"literalblock\"> \
<div class=\"content\"> \
<pre>&lt;local ref&gt; SP &lt;local sha1&gt; SP &lt;remote ref&gt; SP &lt;remote sha1&gt; LF</pre> \
</div> \
</div> \
<div class=\"paragraph\"> \
<p>For instance, if the command <code>git push origin master:foreign</code> were run the \
hook would receive a line like the following:</p> \
</div> \
<div class=\"literalblock\"> \
<div class=\"content\"> \
<pre>refs/heads/master 67890 refs/heads/foreign 12345</pre> \
</div> \
</div> \
<div class=\"paragraph\"> \
<p>although the full, 40-character SHA-1s would be supplied.  If the foreign ref \
does not yet exist the <code>&lt;remote SHA-1&gt;</code> will be 40 <code>0</code>.  If a ref is to be \
deleted, the <code>&lt;local ref&gt;</code> will be supplied as <code>(delete)</code> and the <code>&lt;local \
SHA-1&gt;</code> will be 40 <code>0</code>.  If the local commit was specified by something other \
than a name which could be expanded (such as <code>HEAD~</code>, or a SHA-1) it will be \
supplied as it was originally given.</p> \
</div> \
<div class=\"paragraph\"> \
<p>If this hook exits with a non-zero status, <em>git push</em> will abort without \
pushing anything.  Information about why the push is rejected may be sent \
to the user by writing to standard error.</p> \
</div>",
 	"data_content":"<pre><code><a href=\"https://www.atlassian.com/git/tutorials/git-hooks/local-hooks\">See samples here...</a></code></pre>"

 },
 "hooks/pre-rebase.sample":{
 	"desc":"This hook is called by git rebase and can be used to prevent a branch from getting rebased. The hook may be called with one or two parameters. The first parameter is the upstream from which the series was forked. The second parameter is the branch being rebased, and is not set when rebasing the current branch.",
 	"data_content":"<pre><code><a href=\"https://www.atlassian.com/git/tutorials/git-hooks/local-hooks\">See samples here...</a></code></pre>"
 },
 "hooks/update.sample":{
 	"desc":"<div class=\"paragraph\"> \
<p>This hook is invoked by <em>git-receive-pack</em> on the remote repository, \
which happens when a <em>git push</em> is done on a local repository. \
Just before updating the ref on the remote repository, the update hook \
is invoked.  Its exit status determines the success or failure of \
the ref update.</p> \
</div> \
<div class=\"paragraph\"> \
<p>The hook executes once for each ref to be updated, and takes \
three parameters:</p> \
</div> \
<div class=\"ulist\"> \
<ul> \
<li> \
<p>the name of the ref being updated,</p> \
</li> \
<li> \
<p>the old object name stored in the ref,</p> \
</li> \
<li> \
<p>and the new object name to be stored in the ref.</p> \
</li> \
</ul> \
</div> \
<div class=\"paragraph\"> \
<p>A zero exit from the update hook allows the ref to be updated. \
Exiting with a non-zero status prevents <em>git-receive-pack</em> \
from updating that ref.</p> \
</div> \
<div class=\"paragraph\"> \
<p>This hook can be used to prevent <em>forced</em> update on certain refs by \
making sure that the object name is a commit object that is a \
descendant of the commit object named by the old object name. \
That is, to enforce a \"fast-forward only\" policy.</p> \
</div> \
<div class=\"paragraph\"> \
<p>It could also be used to log the old..new status.  However, it \
does not know the entire set of branches, so it would end up \
firing one e-mail per ref when used naively, though.  The \
<a href=\"#post-receive\"><em>post-receive</em></a> hook is more suited to that.</p> \
</div> \
<div class=\"paragraph\"> \
<p>Another use suggested on the mailing list is to use this hook to \
implement access control which is finer grained than the one \
based on filesystem group.</p> \
</div> \
<div class=\"paragraph\"> \
<p>Both standard output and standard error output are forwarded to \
<em>git send-pack</em> on the other end, so you can simply <code>echo</code> messages \
for the user.</p> \
</div> \
<div class=\"paragraph\"> \
<p>The default <em>update</em> hook, when enabled—​and with \
<code>hooks.allowunannotated</code> config option unset or set to false—​prevents \
unannotated tags to be pushed.</p> \
</div>",
 	"data_content":"<pre><code><a href=\"https://www.atlassian.com/git/tutorials/git-hooks/local-hooks\">See samples here...</a></code></pre>"
 }
}
 var placeholders = $("a[href*='#']")
 var guides=$('.guide')
 $(function () {
  $('[data-toggle="popover"]').popover({
  	html:true,
  	placement:"auto",
  	container: 'body',
  	content:function(){return descriptions[this.href.split('#').pop().replace('/','')].data_content},
  	title:function(){return this.href.split('#').pop().replace('/','')}
  })
})
 placeholders.on('click mouseover', '', function guide() {
    var offset = $(document).scrollTop();
    guides.hide();
    el=guides[0]
    el.innerHTML=descriptions[this.href.split('#').pop().replace('/','')].desc
    guides.parent().css('top', (offset < 0 ? 0 : offset) +'px')
    guides.show()
    // $('.guide'+'#'+ this.href.split('#').pop().replace('/', '','g'))
    //   .css('top', (offset < 0 ? 0 : offset) +'px')
    //   .show();
  });