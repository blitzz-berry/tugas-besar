with open('D:/semester 5/pemrograman web1/tugas besar/kontak.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Simple tag matching
tags = []
for i, char in enumerate(content):
    if char == '<':
        # Check if it's a closing tag
        if i + 1 < len(content) and content[i+1] == '/':
            # Find the tag name
            end = content.find('>', i)
            if end != -1:
                tag_name = content[i+2:end].split()[0]
                tags.append(('/', tag_name))
        else:
            # It's an opening tag, find the end
            end = content.find('>', i)
            if end != -1:
                tag_name = content[i+1:end].split()[0]
                if not tag_name.startswith('!') and not tag_name.startswith('?'):
                    tags.append(('open', tag_name))

# Track opening tags
stack = []
errors = []
for action, tag in tags:
    if action == 'open':
        if tag not in ['br', 'hr', 'img', 'input', 'meta', 'link']:  # Self-closing tags
            stack.append(tag)
    elif action == '/':
        if stack and stack[-1] == tag:
            stack.pop()
        else:
            errors.append(f'Mismatch: Closing tag {tag} without matching opening tag')

if errors:
    print('\\n'.join(errors))

if stack:
    print(f'Unclosed tags: {stack}')
else:
    print('All tags are properly closed')