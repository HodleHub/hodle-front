import subprocess
import sys

fpath = 'src/content/topics/realOnchain.ts'

with open(fpath, 'rb') as f:
    data = f.read()

lines = data.split(b'\n')
for idx in [182, 183, 184]:
    line = lines[idx]
    last4 = line[-4:].hex()
    bs = line.count(b'\\')
    print("Line %d: last4=0x%s backslashes=%d" % (idx+1, last4, bs))

# Compare with origin/main
orig = subprocess.check_output(['git', 'show', 'origin/main:src/content/topics/realOnchain.ts'])
orig_lines = orig.split(b'\n')
for idx in [176, 177, 178]:
    line = orig_lines[idx]
    last4 = line[-4:].hex()
    bs = line.count(b'\\')
    print("ORIG Line %d: last4=0x%s backslashes=%d" % (idx+1, last4, bs))
