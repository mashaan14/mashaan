# -*- coding: utf-8 -*-
"""
Created on Fri Nov 13 20:12:36 2020

@author: mals6571
"""


import imageio
# im = imageio.get_reader('MyMovie.mov')
# filenames = 'MyMovie.mov'
# images = []
# for filename in filenames:
#     images.append(imageio.imread('MyMovie.mov'))
    
# imageio.mimsave('movie.gif', images)

reader = imageio.get_reader('MyMovie03.mov')
images = []
for i, im in enumerate(reader):
    images.append(im)
    
imageio.mimsave('movie.gif', images, fps=1)